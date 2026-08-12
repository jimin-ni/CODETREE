const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

//  수 3개를 고른 최댓값 선정

let ans = 0
let mixA = -Infinity
let mixB = -Infinity
let mixC = -Infinity
let mixD = -Infinity


// 만약 n=3이라면 다 곱하고 종료
if (n === 3) {
    ans = arr[0] * arr[1] * arr[2]
    console.log(ans)
    process.exit(0);
}


// 음수만 모아서 새 배열에 넣기
let minusArr = []
let plusArr = []
for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
        minusArr.push(arr[i])
    } else if (arr[i] > 0) {
        plusArr.push(arr[i])
    } else if (arr[i] === 0) {
        // 0이 있을 때
        mixC = 0
    }
}
// 오름차순 정렬
minusArr.sort((a, b) => (a - b))
plusArr.sort((a, b) => (a - b))


// 음수 2개  양수 1개 곱의 최댓값 구하기
let a = minusArr.length
let b = plusArr.length

if (a >= 2 && b >= 1) {

    let numA = minusArr[0]
    let numB = minusArr[1]
    let numC = plusArr[b - 1]

    mixA = numA * numB * numC
}

// 양수 3개
if (b >= 3) {
    let numD = plusArr[b - 1]
    let numE = plusArr[b - 2]
    let numF = plusArr[b - 3]

    mixB = numD * numE * numF
}

// 음수만 이뤄짐
if (b === 0) {
    mixD = minusArr[a - 1] * minusArr[a - 2] * minusArr[a - 3]
}


ans = Math.max(mixA, mixB, mixC, mixD)

console.log(ans)