const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));


let ans = Infinity

for (let i = 0; i < n; i++) {
    // 차례 대로 하나씩 좌표를 지운다. 
    let newPoints = points.filter((_, idx) => idx !== i);

    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity

    for (let j = 0; j < n - 1; j++) {
        // 남은 점들의 좌표 중, x좌쵸가 제일 작은 것, 
        let x = newPoints[j][0]
        minX = Math.min(x, minX)
        // x 좌표가 제일 큰 것
        maxX = Math.max(x, maxX)

        let y = newPoints[j][1]
        // y좌표중 제일 작은 것
        minY = Math.min(y, minY)
        // y좌표중 제일 큰 것
        maxY = Math.max(y, maxY)
    }

    // x좌표 사이의 길이
    let lengthX = maxX - minX
    // y좌표 사이의 길이
    let lengthY = maxY - minY

    let Ract = lengthX * lengthY

    // 직사각형 넓이가 최소인 것 고르기
    ans = Math.min(ans, Ract)
}

console.log(ans)