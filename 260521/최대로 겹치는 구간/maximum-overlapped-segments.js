const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// x1은 -100부터 존재할수있는데, 리스트는 음수가 없고 0부터 시작하므로, x1에 100을 더했다 생각하고 진행
// 먼저 0 ~ 200 까지 0으로 찬 배열 생성
let arr = []
for (let i = 0; i <= 200; i++) {
    arr[i] = 0
}


// n번 반복
for (let j = 0; j < n; j++) {
    // 구간을 구하는 것이므로, x1부터 x2-1 까지에 영역에 있다고 생각
    let start = segments[j][0] + 100;
    let end = segments[j][1] + 100;

    for (let i = start; i < end; i++) {
        arr[i] += 1
    }
}

console.log(Math.max(...arr))