const fs = require("fs");
let inputNum = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(inputNum[0])
let B = Number(inputNum[1])
let C = Number(inputNum[2])

let maxNum = 0
let minNum = 0

maxNum = Math.max(A,B,C);
minNum = Math.min(A,B,C);

if(A != maxNum && A != minNum ) {
    console.log(A)
} else if (B != maxNum && B != minNum ) {
    console.log(B)
} else {
    console.log(C)
}