const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// 공간 정의  필요: 100000 이 최대. 
let arr = Array(200005).fill("");
let startPoint = 100000

// n번 연산 반복
for (let i = 0; i < n; i++) {
    // 계산할때 아무 타일에서 시작한다고 함. 그럼 시작 위치를 100000 으로 가정?

    // commands를 글자와 숫자로 분리 필요
    const [xStr, dir] = commands[i].split(' ');
    const x = Number(xStr);

    // L 일경우 배열에 W로 교체
    if (dir == 'L') {
        for (let j = startPoint; j > startPoint - x; j--) {
            arr[j] = 'W'
        }
        startPoint = startPoint - x + 1;
    } else if (dir == 'R') {
        // R 일 경우 배열을 B로 교체 
        for (let j = startPoint; j < startPoint + x; j++) {
            arr[j] = 'B'
        }
        startPoint = startPoint + x - 1;
    }
}

let countWhite = 0
let countBlack = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
        if (arr[i] == "W") {
            countWhite += 1
        } else if (arr[i] == "B") {
            countBlack += 1
        }
    }
}

console.log(countWhite, countBlack)