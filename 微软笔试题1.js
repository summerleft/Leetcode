// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, B) {
    // write your code in JavaScript (JavaScript (Node.js 8.9.4))
    const strArr = [...S];
    const lenArr = [];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'x') {
            count++;
        } else {
            if (count) lenArr.push(count);
            count = 0;
        }
    }
    if (count) lenArr.push(count);
    let result = 0;
    lenArr.sort((a, b) => b - a);
    // console.log(lenArr);
    while (B || lenArr.length) {
        if (!lenArr.length) break;
        let curHole = lenArr[0]; 
        if (B >= curHole + 1) { // remain budget
            result += curHole; 
            B -= (curHole + 1); 
            lenArr.shift();
        } else { // no remain
            result += (B - 1); 
            return result;
        }   
    }
    return result;
}



let S = 'x..x.xxx.x', B = 14;
console.log(solution(S, B));