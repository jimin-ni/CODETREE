const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

for(i = 1; i <=N; i++){
    let str = ""
    for(let j = 1; j<= i; j++){
        str += i + " "
    }
    console.log(str) 
}