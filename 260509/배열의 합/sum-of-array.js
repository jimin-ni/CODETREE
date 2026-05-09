const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let arr = [0, 0, 0, 0]

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        arr[i] += Number(input[i*4 + j])   
    }
    console.log(arr[i])
}
