const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);


// 일직선에 서있다
// 두 수 사이로 옮기면 위치A에서 B로 아에 바뀐다. 
// 연속된 수의 관계인지 확인이 필요하다

// 1. 세 수를 오름차순 정렬
let arr2 = arr.sort((a, b) => a - b);

// 2. 조건 판단
// 0,2번째 차이가 2라면 연속된 수 -> 이동x -> 결과 0
if (Math.abs(arr2[0] - arr2[2]) === 2) {
    console.log(0)


} // 0,1번째 차이가 2다 or 1,2 번째 차이가 2다 -> 1번 이동 -> 결과 1
else if (Math.abs(arr2[0] - arr2[1]) === 2 || Math.abs(arr2[1] - arr2[2]) === 2) {
    console.log(1)

} else {
    // 그 외의 경우 -> 항상 2번 이동하면 연속하게 만들 수 있다.
    // 어느 한 수를 2간격 차이나도록 옮기고, 그 사이에 남은 한 수를 넣는 식
    console.log(2)
}