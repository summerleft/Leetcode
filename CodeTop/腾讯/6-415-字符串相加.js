/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    const numArr1 = [...num1].reverse();
    const numArr2 = [...num2].reverse();
    const len = Math.max(num1.length, num2.length);
    let res = [];
    let addTen = 0, sum = 0;
    for (let i = 0; i < len; i++) {
        if (!numArr1[i] || !numArr2[i]) {
            let temp = Number(numArr1[i] ? numArr1[i] : numArr2[i]) + addTen;
            if (temp >= 10) {
                res.push(temp - 10);
                addTen = 1;
            } else {
                res.push(temp);
                addTen = 0;
            }
        } else {
            let temp = Number(numArr1[i]) + Number(numArr2[i]) + addTen;
            if (temp >= 10) {
                res.push(temp - 10);
                addTen = 1;
            } else {
                res.push(temp);
                addTen = 0;
            }
        }
    }
    if (addTen === 1) res.push(1);
    return res.reverse().join('');
};
