/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const strArr = s.split('');
    if (strArr.length % 2 !== 0) return false;
    const resArr = [];
    const left = ['(', '[', '{'];
    const right = [')', ']', '}'];
    for (const str of strArr) {
        if (str === '(' || str === '[' || str === '{') {
            resArr.push(left.indexOf(str));
        } else {
            const temp = resArr.pop();
            if (temp !== right.indexOf(str)) {
                return false;
            }
        }
    }
    if (resArr.length) {
        return false;
    } else {
        return true;
    }
};