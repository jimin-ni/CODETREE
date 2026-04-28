const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim();

let N = Number(arr[0]);

for(let i = N; i>=0; i--) {
    let str = ""
    for(let j = i; j > 0; j--) {
        str += "*" + " "
    }
    console.log(str)

}