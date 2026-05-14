const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

let minuitA = a * 60
let day1 = minuitA + b
let minuitC = c * 60
let day2 = minuitC + d


console.log(day2 - day1)