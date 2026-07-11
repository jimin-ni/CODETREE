const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

let arr = new Array(105).fill(0)

// 총 n개의 선분이 있음
for (let i = 0; i < n; i++) {

    // 해당 직선 영역에 칠하기
    for (let k = segments[i][0]; k <= segments[i][1]; k++) {
        arr[k]++
    }
}

let ans = ''

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
        ans = 'Yes'
        break;
    } else {
        ans = 'No'
    }
}

console.log(ans)