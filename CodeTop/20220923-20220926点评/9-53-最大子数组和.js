/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const dp = [];
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = Math.max(dp[i - 1], 0) + nums[i];
        }
        result = Math.max(result, dp[i]);
    }
    return result;
};