const fs = require('fs')
let inputNum = fs.readFileSync(0).toString().trim();

let a = Number(inputNum)

if(a % 13 == 0 || a % 19 == 0) {
    console.log('True')
} else {
    console.log('False')
}