/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    const dp = new Array(26).fill(0);
    let temp = 0;
    for (let i = 0; i < p.length; i++) {
        if (i > 0 && ((p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1)) {
            temp++;
        } else {
            temp = 1;
        }
        dp[p[i].charCodeAt() - 'a'.charCodeAt()] = Math.max(temp, dp[p[i].charCodeAt() - 'a'.charCodeAt()]);
    }
    return dp.reduce((pre, cur) => {
        return pre + cur;
    })
};