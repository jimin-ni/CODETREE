const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));


// 2차원 평면 위에 서로 다른 N개의 점이 주어지고 그 중 3개를 골라 삼각형을 만들었을 때, 
// 그 중 한 변은 x축에 평행하며,  다른 한 변은 y축에 평행한 삼각형 중
//  최대 넓이에 2를 곱한 값을 구하는 프로그램을 작성해보세요.

let width = -Infinity
let ans = -Infinity

let x1 = 0
let y1 = 0
let x = 0
let y = 0
let x2 = 0
let y2 = 0
let x3 = 0
let y3 = 0

let lengthX = 0
let lengthY = 0

// 완전탐색
for (let i = 0; i < n; i++) {
    // x좌표 i 하나 고르기
    x1 = points[i][0]
    y1 = points[i][1]

    for (let j = i + 1; j < n; j++) {
        // i+1 부터 탐색하는데 그중에서 y 좌표가 동일한거 찾기 -> 밑변
        x = points[j][0]
        y = points[j][1]

        if (y1 === y) {
            x2 = x
            y2 = y
            lengthX = Math.abs(x2 - x1)
        }

        for (let k = 0; k < n; k++) {
            if ((k != i) && (k != j)) {
                // 두 좌표 중 x동일, y 다른 값 찾기 -> 높이
                x = points[k][0]
                y = points[k][1]
                if ((x1 === x) && (y1 != y)) {
                    x3 = x
                    y3 = y
                    lengthY = Math.abs(y1 - y3)
                    width = lengthX * lengthY
                } else if ((x2 === x) && (y2 != y)) {
                    x3 = x
                    y3 = y
                    lengthY = Math.abs(y1 - y3)
                    width = lengthX * lengthY
                }
                ans = Math.max(ans, width)
            }
        }
    }
}

console.log(ans)