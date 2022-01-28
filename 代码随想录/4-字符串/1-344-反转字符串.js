/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length;
    const limit = Math.ceil(len / 2) - 1;
    for (let i = 0; i <= limit; i++) {
        [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
    }
    return s;
};