const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// n -> 밭의 전체 수
// h -> 원하는 목표 높이
// T -> 연속해 원하는 높이로 나와야 하는 밭의 수

// arr.legnth - t +1  -> t 이상의 횟수 동안 구간 반복
let maxLength = n - t
let minCost = 999999

for (let i = 0; i <= maxLength; i++) {

    // i번 밭의 높이를 h 높이로 바꾼다. 바꾸는데 드는 비용을 chgH
    let chgH = 0

    // t 구간 내 확인
    for (let k = i; k < i + t; k++) {
        chgH += Math.abs(arr[k] - h);

    }

    minCost = Math.min(minCost, chgH)

}

// 최소 비용 출력
console.log(minCost)