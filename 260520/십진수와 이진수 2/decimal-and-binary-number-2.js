/*
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('').map(Number);

let num = 0;
let binaryArray = []
let answer = ''

for (let i = 0; i < input.length; i++) {
    num = num * 2 + input[i]
}

num = num * 17

while (true) {
    if (num < 2) {
        binaryArray.push(num);
        break;
    }

    binaryArray.push(num % 2);
    num = Math.floor(num / 2);
}

for (let i = binaryArray.length - 1; i >= 0; i--) {
    answer += binaryArray[i];
}

console.log(answer)
*/

const fs = require("fs");
// 입력의 앞뒤 공백만 제거하고 문자열 그대로 가져옵니다.
const input = fs.readFileSync(0).toString().trim();

// 이진수 문자열을 10진수 숫자로 안전하게 변환합니다.
const binaryInput = parseInt(input, 2); 

// 이후 17을 곱하고 다시 2진수로 출력
console.log((binaryInput * 17).toString(2));
