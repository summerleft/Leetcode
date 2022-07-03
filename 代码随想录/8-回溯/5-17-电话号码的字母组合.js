/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const letterMap = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];
    const n = digits.length;
    if (!n) return [];
    if (n === 1) return letterMap[digits].split('');
    const result = [];
    const path = [];
    const backtracking = (digits, n, index) => {
        if (path.length === n) {
            result.push(path.join(''));
            return;
        }
        for (const cur of letterMap[digits[index]]) {
            path.push(cur);
            backtracking(digits, n, index + 1);
            path.pop();
        }
    }
    backtracking(digits, n, 0);
    return result;
};