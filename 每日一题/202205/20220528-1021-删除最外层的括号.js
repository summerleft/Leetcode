/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    const strArr = [...s];
    let left = 0, right = 0;
    const stack = [];
    const slicePoint = [];
    while (right < s.length) {
        if (strArr[right] === '(') {
            stack.push('(');
        } else {
            stack.pop();
        }
        right++;
        if (!stack.length) {
            slicePoint.push([left, right]);
            left = right;   
        }
    }
    let res = '';
    for (let i in slicePoint) {
        res = res.concat(s.slice(slicePoint[i][0] + 1, slicePoint[i][1] - 1));
    }
    return res;
};