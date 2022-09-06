// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (JavaScript (Node.js 8.9.4))
    const strArr = [...S];
    const position = []; // store position of 'R'
    strArr.forEach((item, index) => {
        if (item === 'R') {
            position.push(index);
        }
    })
    if (!position.length) return 0;
    const len = position.length;
    const destinitionIndex = Math.floor(len / 2); // find index of the position of middle 'R'
    const destinition = position[destinitionIndex]; // position of middle 'R'
    let count = 0;
    position.forEach((item ,index) => {
        count += Math.abs(destinition - item) - Math.abs(index - destinitionIndex);
    })
    if (count > 1e9) return -1;
    return count;
}

console.log(solution('WRRWWR'));
