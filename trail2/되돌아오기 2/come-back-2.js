const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

let arr = commands.split('');

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let x = 0, y = 0

let time = 0
let moveDir = 0  // 처음에는 북쪽을 가리키므로
let answer = -1

for (let i = 0; i < arr.length; i++) {
    time++

    // 명령 반복
    if (arr[i] === 'F') {
        // 현재 방향으로 한 칸 이동
        x = x + dx[moveDir]
        y = y + dy[moveDir]

        if (x === 0 && y === 0) {
            answer = time;
            break;
        }
    } else if (arr[i] === 'L') {
        moveDir = (Math.abs(moveDir + 3)) % 4
    } else if (arr[i] === 'R') {
        moveDir = (Math.abs(moveDir + 1)) % 4
    }
}

console.log(answer)