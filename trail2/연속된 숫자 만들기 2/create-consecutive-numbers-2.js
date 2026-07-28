const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 1. 세 수를 오름차순 정렬
const arr = input[0].split(" ").map(Number).sort((a, b) => a - b);
const [a, b, c] = arr;

// 2. 조건 판단
if (b - a === 1 && c - b === 1) {
    // 예: 5 6 7 -> 이미 연속
    console.log(0);
} else if (b - a === 2 || c - b === 2) {
    // 예: 5 7 10 -> 10을 5와 7 사이(6)로 넣으면 1번 만에 완성!
    console.log(1);
} else {
    // 예: 5 6 10 -> 5를 7로 옮겨 6 7 10 만든 후, 10을 8로 옮겨 6 7 8 (총 2번)
    console.log(2);
}