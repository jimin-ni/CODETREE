const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const blocks = input[1].trim().split(' ').map(Number);

let even = 0;
let odd = 0;

// 짝수라면 짝수 집단 수 증가, 아니라면 홀수 수를 증가
for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] % 2 === 0) {
        even++;
    } else {
        odd++
    }
}

let ans = 0;
let needEven = true;

// 짝수 찾기-홀수찾기 가 세트 
while (true) {
    if (needEven) { // 짝수 방 만들기 - 무조건
        if (even > 0) { // 짝수 방이 존재한다
            even-- // 짝수 방은 줄이고
            ans++ // 총 묶음 수는 늘리기
        } else if (odd >= 2) {   // 홀+홀 = 짝
            odd -= 2;
            ans++
        } else {
            break; // 더이상 짝수 방을 만들 수 없음
        }
    } else {    // 홀수 방 만들기 - 무조건
        if (odd > 0) {
            odd--
            ans++
        } else {
            break;
        }
    }

    needEven = !needEven // 다음 방은 반대 종류로. - 홀수 찾기 
}

// 만약 홀수가 하나만 남았다 - 홀수 방 1개다
if(odd === 1){
    if(needEven){
        // 짝수 방은  만드는데 홀수가 1개 남아서 멈춘 경우, 
        //남은 홀수 1개는 이전 홀수 방에 합쳐짐 -> 짝수가 된다.
        ans--
    } else{
        // 홀수 방 만들어야 하는데 홀수 1개가 남아서 멈춘 경우,
        // 예외상황에 발생한것이므로, 방 개수를 1개 줄여서 조율한다
        ans--
    }
}

console.log(ans)