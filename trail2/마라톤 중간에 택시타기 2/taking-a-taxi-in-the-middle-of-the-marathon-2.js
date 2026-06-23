const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

let minLength = Infinity; 

for (let i = 1; i < n - 1; i++) {
    let removed = arr.splice(i, 1)[0]; 

    let length = 0
    
    for (let j = 1; j < n - 1; j++) {
        let x = Math.abs(arr[j - 1][0] - arr[j][0])
        let y = Math.abs(arr[j - 1][1] - arr[j][1])
        length += x + y
    }
    minLength = Math.min(minLength, length)
    
    arr.splice(i, 0, removed);
}

console.log(minLength)
