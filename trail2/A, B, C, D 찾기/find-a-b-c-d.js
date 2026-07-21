const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

let a, b, c, d = 0;

// 오름차순 정렬
let arrASCE = arr.sort((x, y) => x - y);

let abcd = arrASCE[(arr.length - 1)];

a = arrASCE[0]
b = arrASCE[1]
c = arrASCE[2]
d = abcd - a - b - c

console.log(`${a} ${b} ${c} ${d}`)