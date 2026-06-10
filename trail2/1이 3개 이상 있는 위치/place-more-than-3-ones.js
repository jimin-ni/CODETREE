const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));


// dx, dy 배열 생성
let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]



// 1이 적힌 칸 수를 카운트하는 변수
let result = 0;

// 범위 내에 해당하는지 확인하는 메소드
function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
    // 참이면 true, 거짓이면 false 
}

// 문제는 모든 배열의 각 값에 따라 인접 칸을 확인해야 함. [0][0]부터[n][n] 까지
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        // 1의 횟수를 카운트하는 변수
        let cnt = 0;

        for (let dirNum = 0; dirNum < 4; dirNum++) {
            let nx = x + dx[dirNum]
            let ny = y + dy[dirNum];
            if (inRange(nx, ny) === true) {
                if (grid[nx][ny] === 1) {
                    cnt++;
                }
            }
        }
        if (cnt >= 3) {
            result++
        }
    }
}

console.log(result)