const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// 세 수의 각각 자리수를 더했을 때 다 10이 넘지 않는다.
function sumNum(x, y, z) {
    let xString = x.toString().split('')
    let yString = y.toString().split('')
    let zString = z.toString().split('')

    let maxLength = Math.max(xString.length, yString.length, zString.length)

    let total = 0
    for (let i = 1; i <= maxLength; i++) {
        // 값이 없으면 기본값을 0으로
        let valX = Number(xString[xString.length - i]) || 0
        let valY = Number(yString[yString.length - i]) || 0
        let valZ = Number(zString[zString.length - i]) || 0

        let numSum = valX + valY + valZ

        if (numSum < 10) { // carry 발생 안 함. 아직 괜찮음.
            total++
        } else {// carry가 발생 -> x, y, z 의 자리수 비교 더이상 무의미함.
            break;
        }
    }

    // 모든 자리수를 carry 없이 통과했음 
    if (total === maxLength) {
        return x + y + z;
    } else {
        return -1;
    }
}

// 3개의 서로다른 수 고르기
let ans = -1
for (let i = 0; i < n; i++) {
    let x = arr[i]
    for (let j = i + 1; j < n; j++) {
        let y = arr[j]
        for (let k = j + 1; k < n; k++) {
            let z = arr[k]

            ans = Math.max(ans, sumNum(x, y, z))
        }
    }
}

console.log(ans)
