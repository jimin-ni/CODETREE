const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let lengthAnswer = Infinity

// 완전탐색
for (let i = 0; i < n; i++) {
    let x1 = points[i][0]
    let y1 = points[i][1]
    //console.log(`x1, y1 = ${x1}, ${y1}`)

    for (let j = i + 1; j <= n - 1; j++) {
        let x2 = points[j][0]
        let y2 = points[j][1]
        //console.log(`x2, y2 = ${x2}, ${y2}`)


        let lengthX = x1 - x2
        let lengthY = y1 - y2

        let length = (lengthX * lengthX) + (lengthY * lengthY)
        lengthAnswer = Math.min(lengthAnswer, length)
    }
}

console.log(lengthAnswer)