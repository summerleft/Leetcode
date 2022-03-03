/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const arr = [...s];
    if (arr.length % 2 === 1) return false;
    const stack = [];
    for (const char of arr) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (char === map[stack.pop()]) {
                continue;
            } else {
                return false;
            }
        }
    }
    if (stack.length) return false;
    else return true;
};