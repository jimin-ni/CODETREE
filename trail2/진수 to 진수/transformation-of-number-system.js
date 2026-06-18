const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];


// A진수 N을 배열에 넣기
const strA = Array.from(n, Number);

// A진수로 표현된 N을 자연수 num으로 바꾸기
let num = 0
for (let i = 0; i < strA.length; i++) {
    num = num * a + strA[i];
}

// num을 b진수로 바꾸기
let strB = []
while (true) {
    if (num < b) {
        strB.push(num % b)
        break;
    }

    strB.push(num % b)
    num = Math.floor(num / b)
}

// strB를 역순으로 출력
let result=[]
for(let i = strB.length-1;i>=0;i--){
    result.push(strB[i])
}

console.log(result.join(''))