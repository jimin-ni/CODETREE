const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split('\n')
let num3 = 0
let num5 = 0


for(i = 0; i < arr.length; i++){
    if(Number(arr[i]) % 3 == 0){
        // 3의 배수
        num3++
    }
    if(Number(arr[i]) % 5 == 0){
        // 3의 배수
        num5++
    }
}

console.log(`${num3} ${num5}`)