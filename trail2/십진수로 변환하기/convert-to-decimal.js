const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const binaryStr = input[0];

let num = 0;
const str = Array.from(String(binaryStr), Number);

for (let i = 0; i < str.length; i++) {
    num = num * 2 + str[i]
}

console.log(num)