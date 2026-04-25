const fs = require('fs');
let inputNum = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(inputNum[0]);
let arr = []

for(i=1; i<=N ; i++) {
    let num = Number(inputNum[i])
    if(inputNum[i]%2 == 0) {
        // 짝수
        arr.unshift(num)
    }
}

console.log(arr.join(' '))