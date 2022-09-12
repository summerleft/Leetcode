/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    const m = nums1.length,
          n = nums2.length;
    const dp = new Array(m).fill(0).map(() => new Array(n));
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = nums1[i] === nums2[j] ? 1 : 0;
            } else {
                dp[i][j] = nums1[i] === nums2[j] ? dp[i - 1][j - 1] + 1 : 0;
            }
            result = Math.max(result, dp[i][j]);
        }
    }
    return result;
};