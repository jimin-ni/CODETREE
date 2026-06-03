const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// n+1 개의 0이 적힌 배열 생성
let arr = new Array(n + 1).fill(0);
let answer = -1;

for (let i = 0; i < m; i++) {
    let numArr = penalizedPersons[i]
    arr[numArr] = arr[numArr] + 1

    if (arr[numArr] >= k) {
        answer = numArr
        break;
    }
}

console.log(answer)