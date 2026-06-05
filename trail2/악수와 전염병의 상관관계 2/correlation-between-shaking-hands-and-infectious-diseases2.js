const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

// shakes 배열을 t 오름차순으로 정렬 
// a-b가 음수면 a를 앞으로, 양수면 b를 앞으로 
shakes.sort((a, b) => a.time - b.time)

// 개발자의 번호가  index인 배열 생성.
// 감염이면 true, 비감염이면 fasle
const arrDev = new Array(n + 2).fill(false)
//p번 개발자는 감염
arrDev[p] = true;

// 해당 번호의 개발자의 악수 횟수를 의미하는 배열 생성
// k 값이 디폴트로, 악수 횟수 당 1 차감. 0이 된다면 감염x
const arrShake = new Array(n + 2).fill(k)



// t 번의 줄 동안 반복해서 input값을 받는다. 
for (let i = 0; i < t; i++) {
    // x, y 값 대입
    let x = shakes[i].person1;
    let y = shakes[i].person2;

    //  x가 감염자, y 비감염자
    if (arrDev[x] == true && arrDev[y] == false) {

        // x의 횟수가 0이상 -> y 감염, x횟수 -1
        if (arrShake[x] > 0) {
            arrDev[y] = true;
            arrShake[x]--;

            // x 횟수가 0 -> y 감염 못 시킴
        } else if (arrShake[x] == 0) {
            // 감염 못 시킴
        }

        // x 비감염자, y 감염자
    } else if (arrDev[x] == false && arrDev[y] == true) {
        // y의 횟수가 0이상 -> x 감염, y횟수 -1
        if (arrShake[y] > 0) {
            arrDev[x] = true;
            arrShake[y]--;

            // y 횟수가 0 -> x 감염 못 시킴
        } else if (arrShake[y] <= 0) {
            // 감염 못 시킴
        }

        // x감염자, y 감염자
    } else if (arrDev[x] == true && arrDev[y] == true) {
        // 감염은 이뤄지지 x, 횟수만 차감
        arrShake[x]--;
        arrShake[y]--;

        // x 비감염자, y 비감염자
    } else if (arrDev[x] == false && arrDev[y] == false) {
        // 감염 못 시킴. 아무일도 안 일어남
    }
}

let result = []
for (let i = 1; i <= n; i++) {
    if (arrDev[i] == true) {
        result.push(1)
    } else {
        result.push(0)
    }
}

console.log(result.join(''))