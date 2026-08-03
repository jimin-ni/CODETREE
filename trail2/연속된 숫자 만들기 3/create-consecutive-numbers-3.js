const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const a = input[0].split(" ").map(Number);


// 양쪽 빈 공간 중 더 넓은 쪽을 선택하여 한 칸씩 좁쳐 나가면, 빈 공간의 개수만큼 정확히 이동을 반복할 수 있습니다.
const gap1 = a[1] - a[0];
const gap2 = a[2] - a[1];

const maxMoves = Math.max(gap1, gap2) - 1;
console.log(maxMoves)