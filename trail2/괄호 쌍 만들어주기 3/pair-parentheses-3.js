const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let arr = A.split('')

// 처음 ( 가 나왔을 때 그 후에 ) 가 나오는 개수를 더하기
// 두 번째 (가 나왔을 때 그 후에 )가 나오는 개수를 더하기 ...
let sumType = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[j] === ')') {
                sumType++
            }
        }
    }
}

console.log(sumType)