const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split('\n');

/* 
for (let i=0; i < arr.length; i++){
    if (Number(arr[i]) != 0) {
        console.log(arr[i])
    }
} 
*/


// while문

let i = 0; 
while (i < arr.length) {
    if (Number(arr[i]) !== 0) {
        console.log(arr[i]);
    }
    i++; 
}