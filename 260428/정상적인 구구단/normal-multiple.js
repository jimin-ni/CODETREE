const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim();

let N = Number(arr);

for(let i = 1; i <= N; i++){
    let str = ""
    for(let j = 1; j <=N; j++){
        str += i + " * " + j + " = " + i*j + (j === N ? "" : ", ")
    }
    console.log(str)
}