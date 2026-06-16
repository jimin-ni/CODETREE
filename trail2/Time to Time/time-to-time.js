const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);


// a시간 b분을 모두 분으로 변환하기 
let dayA = a*60 + b

// c시간 d분을 모두 분으로 변환하기
let dayB = c*60 + d

// 지나간 시간 측정
let calculate = dayB-dayA


console.log(calculate)



/*
let minuitA = a * 60
let day1 = minuitA + b
let minuitC = c * 60
let day2 = minuitC + d


console.log(day2 - day1)
*/