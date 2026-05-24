const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

let arr = Array(200005).fill("");
let startPoint = 100000

for (let i = 0; i < n; i++) {

    const [xStr, dir] = commands[i].split(' ');
    const x = Number(xStr);

    if (dir == 'R') {
        for (let j = startPoint; j < startPoint + x; j++) {
            arr[j] += 'B'
        }

        startPoint = startPoint + x - 1
    } else {
        for (let j = startPoint; j > startPoint - x; j--) {
            arr[j] += 'W'
        }
        startPoint = startPoint - x + 1;
    }
}

let whiteCount = 0;
let blackCount = 0;
let grayCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
        // 비어있지 않은 배열
        let wCount = 0;
        let bCount = 0;

        for (let k = 0; k < arr[i].length; k++) {
            if (arr[i][k] === 'W') wCount++;
            if (arr[i][k] === 'B') bCount++;
        }

        if (wCount >= 2 && bCount >= 2) {
            arr[i] = 'G'; // 기존 값을 다 지우고 'G'만 남김
            grayCount++;
        } else {
            const lastColor = arr[i][arr[i].length - 1];
            if (lastColor === 'W') {
                whiteCount++;
            } else if (lastColor === 'B') {
                blackCount++;
            }
        }

    }
}

console.log(`${whiteCount} ${blackCount} ${grayCount}`);