const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// 100개의 0으로 찬 배열
let arr = Array(101).fill(0);

// N 번 반복한다
for (let i = 0; i < n; i++) {

    let start = segments[i][0]
    let end = segments[i][1]

    // arr 배열에 정해진 영역까지 +1
    for (let j = start; j <= end; j++) {
        arr[j] += 1
    }
}

// 최대로 겹치는 지점 찾기
let maxPoint = Math.max(...arr)
console.log(maxPoint)