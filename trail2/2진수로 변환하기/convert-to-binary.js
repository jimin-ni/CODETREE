const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

let digits = []
while (true) {
    if (n < 2) {
        digits.push(n)
        break;
    }
    digits.push(n % 2)
    n = Math.floor(n / 2)
}

// 역순으로 출력
let binaryNum = ""
for (let i = digits.length-1; i >= 0; i--) {
    binaryNum += digits[i]
}

console.log(binaryNum)