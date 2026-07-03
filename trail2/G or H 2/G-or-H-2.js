const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

// 오름차순으로 정리
const sortedPositions = people.sort((a, b) => a.pos - b.pos);

// 최대 크기 저장 변수
let maxSize = 0

// 시작사람과 끝사람 정하는 반복문
for (let i = 0; i < sortedPositions.length; i++) {
    for (let j = i; j < sortedPositions.length; j++) {
        let gCount = 0;
        let hCount = 0;

        // 구간 내의 g, h 개수
        for (let k = i; k <= j; k++) {
            if (sortedPositions[k].letter === 'G') {
                gCount++
            } else if (sortedPositions[k].letter === 'H') {
                hCount++
            }
        }

        // 오직 G만 있음 or H만 있음 or 둘 개수가 같음
        if (gCount > 0 && hCount === 0) {
            const currentSize = sortedPositions[j].pos - sortedPositions[i].pos
            maxSize = Math.max(maxSize, currentSize)
        } else if (hCount > 0 && gCount === 0) {
            const currentSize = sortedPositions[j].pos - sortedPositions[i].pos
            maxSize = Math.max(maxSize, currentSize)
        } else if (gCount === hCount) {
            const currentSize = sortedPositions[j].pos - sortedPositions[i].pos
            maxSize = Math.max(maxSize, currentSize)
        }
    }
}

console.log(maxSize)