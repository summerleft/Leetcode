/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    if (tokens.length === 1) return parseInt(tokens[0]);
    const temp = [];
    let result = 0;
    for (const s of tokens) {
        if (s !== '+' && s !== '-' && s !== '*' && s !== '/') {
            temp.push(s);
        } else {
            let y = Number(temp.pop());
            let x = Number(temp.pop());
            result = compute(x, y, s);
            temp.push(result);
        }
    }
    return result;
};

let compute = function(a, b, symbol) {
    if (symbol === '+') {
        return a + b;
    } else if (symbol === '-') {
        return a - b;
    } else if (symbol === '*') {
        return a * b;
    } else {
        return parseInt(a / b);
    }
}