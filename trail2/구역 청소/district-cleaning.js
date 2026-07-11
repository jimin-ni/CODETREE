const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

let arr = new Array(105).fill(0)

for (let i = a; i < b; i++) {
    arr[i] = 1
}

for (let i = c; i < d; i++) {
    arr[i] = 1
}

let clean = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        clean++
    }
}

console.log(clean )