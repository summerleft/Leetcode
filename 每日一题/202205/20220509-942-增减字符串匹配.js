/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    const n = s.length;
    const strArr = [...s];
    let min = 0, max = n;
    const res = [];
    for (let i = 0; i < n; i++) {
        if (strArr[i] === 'I') {
            res.push(min++);
        } else {
            res.push(max--);
        }
    }
    res.push(min);
    return res;
};