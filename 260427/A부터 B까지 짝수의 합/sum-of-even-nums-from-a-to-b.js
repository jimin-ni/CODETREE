const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');
let A = Number(arr[0]);
let B = Number(arr[1]);
let sum_Num = 0



for(i = A; i <= B; i++){
    if(i % 2 == 0){
        // 짝수
        sum_Num = sum_Num + i
    } 
}
console.log(sum_Num)