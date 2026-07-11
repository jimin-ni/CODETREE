const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

// 105까지 0으로 채운 배열 생성
let arr = new Array(105).fill(0)

// 첫 번째 선분 길이만큼 1 추가
for (let i = x1; i <= x2; i++) {
    arr[i]++
}

// 두 번째 선분 길이만큼 1 추가
for (let i = x3; i <= x4; i++) {
    arr[i]++
}

let answer = 'nonintersecting'
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) { // 두 선분이 겹친다
        answer = 'intersecting'
        break;
    }
}

console.log(answer)