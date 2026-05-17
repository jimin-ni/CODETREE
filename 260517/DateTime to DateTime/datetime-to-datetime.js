const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

let days = 0;
let days_hours = 0;
let hours_p = 0;
let hours_m = 0;
let minuites_p = 0;
let minuites_m = 0;
let total_minuites = 0;


while (true) {

    if (((A * 24 * 60) + (B * 60) + C) < ((11 * 24 * 60) + (11 * 60) + 11)) {
        total_minuites = -1
        break;
    }

    // 일수 계산
    if (A - 11 != 0) {
        // 만약 A가 11일보다 크다면
        days = A - 11;
        days_hours = days * 24;
    }

    if (B > 11) {
        hours_p = B - 11
    } else {
        hours_m = 11 - B
    }

    if (C > 11) {
        minuites_p = C - 11
    } else {
        minuites_m = 11 - C
    }

    total_minuites = (days_hours * 60)
        + (hours_p * 60) - (hours_m * 60)
        + (minuites_p) - (minuites_m)
    break;
}

console.log(total_minuites);