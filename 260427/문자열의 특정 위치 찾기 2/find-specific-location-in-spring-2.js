const fs = require('fs');;
let alphabet = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];
let sum = 0

for ( let i =0; i < arr.length; i++){
    let char = arr[i];
    if(char[2] == alphabet || char[3] == alphabet){
        sum++
        console.log(char)
    }
}

console.log(sum)