const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// 열리게 되는 조합의 수 저장 
let ans = 0

// 1부터 n까지 수 중 하나씩 중복해서 총 3자리 수를 만든다
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            let ianda = Math.abs(i - a)
            let jandb = Math.abs(j - b)
            let kandc = Math.abs(k - c)

            if (ianda <= 2 || jandb <= 2 || kandc <= 2) {
                ans++
            }
        }
    }
}

// 서로다른 조합의 수 출력
console.log(ans)