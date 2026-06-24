const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

let arr = A.split('')

let ans = 0
for (let i = 0; i < arr.length; i++) {
    //console.log('for 문 시작')

    if (arr[i] === '(') {

        if (arr[i + 1] === '(') {
            for (let j = i + 2; j < arr.length; j++) {
                if (arr[j] === ')') {
                    if (arr[j + 1] === ')') {
                        ans++
                    }
                }
            }
        }
    }
}

console.log(ans)