const express = require('express') //引用express
const router = express.Router() //引用 express 路由器

const generateShortCode = require('../../shortcode_generate')
const URL = require('../../models/shortenURL')

//首頁route
router.get('/', (req,res) => {
  res.render('index')
})

router.post('/', (req,res) => {
  const ori_url = req.body.userURL  //使用者打的內容存到ori_url
  const randomCode = generateShortCode()

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

//用得到的新URL，去導向 originalURL
router.get('/:shortCode' , (req,res) =>{
  const shortCode = req.params.shortCode 
  URL.findOne({ shortURL: shortCode })   //findOne找資料庫內符合"shrotCode"條件的data
     .then((data) =>{
      if(!data){
        res.render('error',{
          errorMsg: '找不到相符的URL',
          checkMsg: '請再確認一下輸入的網址'
        })
        return }
        
      res.redirect(data.originalURL)   //導向該筆data的originalURL
     })
})

module.exports = router //匯出路由器