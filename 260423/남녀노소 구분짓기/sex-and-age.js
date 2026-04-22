const fs = require("fs");
let inputNum = fs.readFileSync(0).toString().trim().split('\n');

let gender = Number(inputNum[0])
let age = Number(inputNum[1])

if (gender == 1) { // 여자
    if (age >= 19) {
        console.log('WOMAN')
    } else {
        console.log('GIRL')
    }
}else if (gender == 0){
    if (age >= 19) {
        console.log('MAN')
    } else {
        console.log('BOY')
    }
}