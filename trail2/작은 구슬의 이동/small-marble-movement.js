const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");

// 초기값
x = Number(r);
y = Number(c);

// 방향을 반대로 바꿀 때의 dx dy
const dx = [0, 1, -1, 0], dy = [1, 0, 0, -1]

// 알파벳 별 object이용해 정리
const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
}

// 이동 방향 초기값
let moveDir = mapper[d];

// 범위 내에 있는지 확인
function inRange(nx, ny) {
    return nx >= 1 && nx <= n && ny >= 1 && ny <= n;
}

// t 초 동안 명령 진행
for (let i = 0; i < t; i++) {
    // 현재 방향으로 한 칸 이동
    nx = x + dx[moveDir]
    ny = y + dy[moveDir]

    // 범위에 있다
    if (inRange(nx, ny)) {
        x = nx;
        y = ny;
    }
    // 범위를 벗어났다 = 벽에 닿아 방향을 바꿔야 함.
    else {
        moveDir = 3 - moveDir;
    }
}

console.log(`${x} ${y}`);