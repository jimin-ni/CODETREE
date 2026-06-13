const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);

//초기값
let x = 0
let y = 0

// 누적 시간 측정
let time = 0, answer = -1

for (let i = 0; i < n; i++) {
    // 명령을 n번 반복한다
    let [direction, move] = moves[i].split(' ');
    let way = Number(move)

    for (let j = 0; j < way; j++) {
        time++;

        if (direction === 'E') {
            x++
        } else if (direction === 'S') {
            y--
        } else if (direction === 'W') {
            x--
        } else if (direction === 'N') {
            y++
        }

        if (x === 0 && y === 0) {
            answer = time;
            break;
        }
    }
    if (answer !== -1) break;
}

console.log(answer); 