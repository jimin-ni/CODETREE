const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let n = Number(N);

let arr = []

for(i = 1; i <= n; i++) {
    if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 ){
        continue
    } else {
        arr.push(i)
    }
}

console.log(arr.length)
