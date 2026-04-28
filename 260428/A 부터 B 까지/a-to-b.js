const fs = require('fs');
let str = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(str[0]);
let B = Number(str[1]);
let arr = [];

while (A <= B) {

    arr.push(A)

    if(A % 2 != 0){
        // 홀수
        A = A*2
    } else {
        // 짝수
        A = A + 3
    }
}

console.log(arr.join(' '))