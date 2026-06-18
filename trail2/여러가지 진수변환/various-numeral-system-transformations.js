const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

let str = []
let result = []

while (true) {
    if (n < b) {
        str.push(n % b);
        break;
    }

    str.push(n % b)
    n = Math.floor(n / b)
}

for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i])
}

console.log(result.join(''))