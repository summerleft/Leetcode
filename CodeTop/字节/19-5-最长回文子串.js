/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const len = s.length
    if (len < 2) return s;

    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    let maxLen = 1;
    let begin = 0;
    const strArr = [...s];

    for (let L = 2; L <= len; L++) {
        for (let left = 0; left < len; left++) {
            let right = left + L - 1;
            if (right >= len) break;

            if (strArr[left] !== strArr[right]) {
                dp[left][right] = false;
            } else {
                if (right - left < 3) {
                    dp[left][right] = true;
                } else {
                    dp[left][right] = dp[left+1][right-1];
                }
            }
            if (dp[left][right] && right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                begin = left;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
};