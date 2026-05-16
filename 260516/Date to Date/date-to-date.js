const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

let month = m1, day = d1;
let elapsed_days = 1;

// 각 월별 일수 배열
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

while (true) {
    if (month === m2 && day === d2) {
        break;
    }

    elapsed_days += 1;
    day += 1;

    if (day > num_of_days[month]) {
        month += 1;
        day = 1;
    }
}

console.log(elapsed_days);

