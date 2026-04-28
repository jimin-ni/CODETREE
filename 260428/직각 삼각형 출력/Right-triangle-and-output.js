const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim();

let N = Number(arr)

let str = "*"
    
for(let j = 1; j <= N; j++){
    console.log(str)
    str += "**"
}