const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(arr[0]);

for (let i = 1; i <= N + 2; i = i + 2) {
    let a = Number(arr[i]);
    let b = Number(arr[i + 1]);
    let str = 0

    for (let j = a; j <= b; j++) {
        if (j % 2 == 0) {
            str = str + j
        }
    }
    console.log(str);
}