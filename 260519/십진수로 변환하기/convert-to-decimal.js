const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
let num = 0;

for (let i = 0; i < binaryStr.length; i++) {
    num = num * 2 + Number(binaryStr[i])
}

console.log(num)