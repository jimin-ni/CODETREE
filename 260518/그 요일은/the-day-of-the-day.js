const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let left_days = 0


if (m1 == m2) {
    left_days = d2 - d1
} else if (m1 < m2) {
    // m1 < m2 m1달의 남은 일 수 + m1과 m2 사이의 달 + d2 날 을 더하기 
    for (let i = m1 + 1; i < m2; i++) {
        left_days = left_days + num_of_days[i]
    }
    left_days = left_days + (num_of_days[m1] - d1) + d2
}


// 7로 left_days를 나눈 몫이 횟수에 포함됨
let sum = 0
sum = Math.floor(left_days / 7)

// 나눈 나머지
let num = 0
num = (left_days % 7)
for (let i = 1; i <= num; i++) {
    if (week[i] == A) {
        sum = sum + 1
    }
}

console.log(sum)