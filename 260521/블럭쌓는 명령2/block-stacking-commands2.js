const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// 총 n개의 배열을 0으로 채워 만들기 
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = 0;
}

for (let i = 0; i < k; i++) {
    // 2차원 배열 segments에서 Ai Bi값을 가져와 1씩 더하기
    for (let j = (segments[i][0]-1); j <= segments[i][1]-1; j++) {
        arr[j] += 1;
    }
}

// 배열 arr 에서 최대값 출력하기
result = Math.max(...arr)

console.log(result)