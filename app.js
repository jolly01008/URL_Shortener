const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

const generateShortCode = require('./shortcode_generate')
const URL = require('./models/shortenURL')
require('./config/mongoose')

app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(express.urlencoded({ extended: true })) //需載入body-parser才能抓取req.body的表單資料

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  const ori_url = req.body.userURL
  console.log('req.body.originalUrl:' , ori_url)
  const randomCode = generateShortCode()
  console.log(randomCode)


  if(!ori_url){ return res.redirect('/') } //如果使用者沒打內容，重新導向首頁
  
  //用findOne找是否有符合條件的data
  //沒符合的data，就create data
  URL.findOne({ originalURL: ori_url })
    .then(data => data ? data : URL.create({ shortURL: randomCode , originalURL: ori_url})
    )

    //把data render出來。可把定義好的origin、shortCode拿到index檔案做使用
    .then(data => res.render('index' , {
      origin: req.headers.origin,
      shortCode: data.shortURL,
    }))

    .catch(error => console.log(error))
})

app.listen( port , () =>{
  console.log(`Express is running on http://localhost:${port}`)
})

