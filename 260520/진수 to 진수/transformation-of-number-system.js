const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

// A진수를 n을 십진수로 변환하기 
const number = parseInt(n, a); 

console.log(number.toString(b))