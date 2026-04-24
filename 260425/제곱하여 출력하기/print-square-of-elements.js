const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = input[0]
let result = []

for(let i = 1; i <= N; i++){
    let num = Number(input[i])
    result.push(num * num)
}

console.log(result.join(' '))