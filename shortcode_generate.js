//從words陣列中隨機抽取一個元素。抽不只一次所以包成一個函式
function randomIndex (words){
  let randomIndex =  Math.floor(Math.random(words)*words.length)
  return words[randomIndex]   //return出來的值，會是從words隨機選出的某一個元素
}

function generateShortCode (){
  const words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  let shortCode = ''
  for(let i=1 ; i<=5 ; i++){
    shortCode += randomIndex(words) //從words隨機選出的每一個元素，都接起來
    // console.log(shortCode)
  }

  return shortCode //return shortCode 的值出去
}

module.exports = generateShortCode //export generateShortCode function for other file to use 