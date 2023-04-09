const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(express.urlencoded({ extended: true })) //需載入body-parser才能抓取req.body的表單資料

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  const Url = req.body.shortURL
  console.log('req.body.shortUrl:' , Url)
  res.render('index', { Url })
})

app.listen( port , () =>{
  console.log(`Express is running on http://localhost:${port}`)
})

