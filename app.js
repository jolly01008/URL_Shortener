const express = require('express')
const app = express() //啟動express應用程式伺服器，設定app代表伺服器
const port = 3000
const exphbs = require('express-handlebars')

require('./config/mongoose')
const routes = require('./routes') //引用總路由器

app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(express.urlencoded({ extended: true })) //需載入body-parser才能抓取req.body的表單資料

app.use(routes) //將request導入路由器

app.listen( port , () =>{
  console.log(`Express is running on http://localhost:${port}`)
})

