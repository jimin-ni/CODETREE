const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(arr[0]);
let idx = 1

for (let i = 1; i <= N; i++) {
    let a = Number(arr[idx]);
    let b = Number(arr[idx + 1]);
    idx = idx + 2

    let str = 0

    for (let j = a; j <= b; j++) {
        if (j % 2 == 0) {
            str = str + j
        }
    }
    console.log(str);
}