/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const strArr = [...s];
    const len = strArr.length;
    if (len % 2 !== 0) return false;
    const stack = [];
    for (let i = 0; i < len; i++) {
        const cur = strArr[i];
        if (map[cur]) {
            stack.push(cur);
        } else {
            if (cur !== map[stack[stack.length - 1]]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length) return false;
    return true;
};