const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// B수열 오름차순 정렬, 문자열로 변환
const targetArr = [...arr2].sort((a,b) => a-b).join(',');

let beautifulCount = 0;

// A수열에서 길이 m 만큼 
for(let i = 0; i < n-m +1; i++){
    // i~i+m 까지를 구간으로 하는 수열을 수열 A를 바탕으로 만들기
    const subArr = arr1.slice(i,i+m);

    // 수열을 오름차순으로 정렬
    subArr.sort((a,b) => a-b);

    // 해당 수열도 ,로 구분해 합쳐서 비교 수열 B와 같은지 확인하기 
    if(subArr.join(',')=== targetArr){
        beautifulCount++
    }
}

console.log(beautifulCount)