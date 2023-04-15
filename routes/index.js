const express = require('express') //引用express
const router = express.Router() //引用 express 路由器

const home = require('./moudels/home') //載入home.js檔案

router.use('/',home) //將網址結構符合/的字串request導向home模組

module.exports = router //匯出路由器