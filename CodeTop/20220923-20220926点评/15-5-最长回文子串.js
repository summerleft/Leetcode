/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const len = s.length;
    if (len === 1) return s;
    const dp = new Array(len).fill(0).map(() => new Array(len));
    let maxLen = 0, start = 0;
    for (let L = 1; L <= len; L++) {
        let left = 0;
        while (left < len - L + 1) {
            let right = left + L - 1;
            if (s[left] === s[right]) {
                if (L > 2) {
                    dp[left][right] = dp[left + 1][right - 1];
                } else {
                    dp[left][right] = true;
                }
            } else {
                dp[left][right] = false;
            }
            if (dp[left][right] && right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left++;
        }
    }
    return s.slice(start, start + maxLen);
};