const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');

let N = Number(arr[0]);
let M = Number(arr[1]);


for(let i = 0; i<N; i++){
    let str = ""
    for(let j = 0; j < M; j++){
        str += "*" + " "
    }
    console.log(str);
}