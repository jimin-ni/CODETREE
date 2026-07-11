const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// 겹치지 않는 경우 4 가지 중 하나에 해당한다 -> 겹치지 않는다. nonoverlapping
// 겹치지 않는 경우 4 가지 모두 다 안 해당된다 -> 겹친다. overlapping

let answer = 'overlapping'

// 겹치지 않는 경우 1
if (x2 < a1) {
    answer = 'nonoverlapping';
} else if (a2 < x1) {
    answer = 'nonoverlapping';
} else if (b2 < y1) {
    answer = 'nonoverlapping';
} else if (y2 < b1) {
    answer = 'nonoverlapping';
} else {
    answer = 'overlapping';
}

console.log(answer)