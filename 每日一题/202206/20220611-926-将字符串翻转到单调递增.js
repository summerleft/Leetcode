/**
 * @param {string} s
 * @return {number}
 */
 var minFlipsMonoIncr = function(s) {
    const strArr = [...s];
    let dp = 0, cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (strArr[i] === '1') {
            cnt++;
        } else {
            dp = Math.min(dp + 1, cnt);
        }
    }
    return dp;
};