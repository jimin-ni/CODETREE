const fs = require('fs');
let inputNum = fs.readFileSync(0).toString().trim()
let A = inputNum.split(' ');

console.log(A.reverse().join(''))