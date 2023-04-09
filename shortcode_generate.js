const Number = "0123456789"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseLetters = upperCaseLetters.toLowerCase()

//從collection陣列中隨機抽取一個元素。抽不只一次所以包成一個函式
function randomIndex (collection){
  let randomIndex =  Math.floor(Math.random(collection)*collection.length)
  return collection[randomIndex]   //return出來的值，會是從collection隨機選出的某一個元素
}

function generateShortCode (){
  let collection = []
  const NumberArr = Number.split('')
  const upperCaseLettersArr = upperCaseLetters.split('')
  const lowerCaseLettersArr = lowerCaseLetters.split('')

  //把數字與大小寫字母的陣列，全都放進同一組collection陣列
  collection = collection.concat(NumberArr).concat(upperCaseLettersArr).concat(lowerCaseLettersArr)

  let shortCode = ''
  for(let i=1 ; i<=5 ; i++){
    shortCode += randomIndex(collection) //從collection隨機選出的每一個元素，都接起來
    // console.log(shortCode)
  }

  return shortCode //return shortCode 的值出去
}
  
module.exports = generateShortCode //export generateShortCode function for other file to use 