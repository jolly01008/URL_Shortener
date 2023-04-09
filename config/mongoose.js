const mongoose = require('mongoose')

//僅在非正式環境時使用dotenv
if(process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}

mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error" , () => {
  console.log("mongoDB connect failed!")
})

db.once("open" , ()=> {
  console.log("mongoDB connect success!")
})

module.exports = db