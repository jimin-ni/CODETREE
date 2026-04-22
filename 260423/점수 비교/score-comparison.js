const fs = require('fs')
let inputNum = fs.readFileSync(0).toString().trim().split(/\s+/);

let A_math = Number(inputNum[0])
let A_eng = Number(inputNum[1])
let B_math = Number(inputNum[2])
let B_eng = Number(inputNum[3])

if(A_math > B_math && A_eng > B_eng) {
    console.log('1');
} else {
    console.log('0');
}