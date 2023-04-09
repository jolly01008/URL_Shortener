const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const generateShortCode = require('./shortcode_generate')

const mongoose = require('mognoose')



app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(express.urlencoded({ extended: true })) //需載入body-parser才能抓取req.body的表單資料

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  const Url = req.body.originalURL
  console.log('req.body.originalUrl:' , Url)
  const randomCodes = generateShortCode()
  // const newUrl = (`https://jolly.com/${randomText}`)
  console.log(randomCodes)
  res.render('index', { Url })
})

app.listen( port , () =>{
  console.log(`Express is running on http://localhost:${port}`)
})

