const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 12개의 배열로 구현해둠. inext번호가 비둘기 번호. 0으로 채워두고, 이동이 확인될 때 마다 +1
let pigeon = new Array(12).fill(-1)
let count = 0;

// 비둘기 이동을 기록한 내용을 순회
for (let i = 0; i < n; i++) {
    const [pigeonNum, location] = movements[i]

    if (pigeon[pigeonNum] != -1 && pigeon[pigeonNum] !== location) {
        count++
    }
    pigeon[pigeonNum] = location;
}


console.log(count)