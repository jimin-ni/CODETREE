const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let left_days = 0;
let answer_day = "";

if (m1 === m2) {
    left_days = (d2 - d1);
} else if (m1 < m2) {
    for (let i = m1 + 1; i < m2; i++) {
        left_days = left_days + num_of_days[i]
    }
    left_days = (num_of_days[m1] - d1) + left_days + d2
} else if (m1 > m2) {
    let temp_days = 0;
    for (let i = m2 + 1; i < m1; i++) {
        temp_days = temp_days + num_of_days[i]
    }
    left_days = -((num_of_days[m2] - d2) + temp_days + d1)
}

left_days = left_days % 7
answer_day = week.at(left_days)

console.log(answer_day);