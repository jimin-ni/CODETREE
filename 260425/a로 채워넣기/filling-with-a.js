const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();


// 1. 문자열을 배열로 바꿔서 해결하기 
//let arr = fs.readFileSync(0).toString().trim().split('');
//arr[1] = 'a'
//arr[arr.length-2] = 'a'

//console.log(arr.join(''))

// 2. 문자열을 유지하면서 해결하기
let result = arr.substring(0,1) + 'a' + arr.substring(2)

let len = arr.length
result = result.substring(0,len-2) + 'a' + result.substring(len-1)

console.log(result)