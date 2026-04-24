const fs = require('fs');
let inputNum = fs.readFileSync(0).toString().trim().split(' ');

inputNum[0] = Number(inputNum[0])
inputNum[1] = Number(inputNum[1])

for (let i = 2; i < 10; i++) {
    inputNum[i] = (inputNum[i-1] + inputNum[i - 2]) % 10
}

console.log(inputNum.join(' '))