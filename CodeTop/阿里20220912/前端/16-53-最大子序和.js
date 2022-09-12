/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        }
    }
    return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const len = nums.length;
    if (len === 0) return 0;
    return maxSubArraySum(nums, 0, len - 1);
};

const maxSubArraySum = (nums, left, right) => {
    if (left === right) return nums[left];
    const mid = Math.floor((left + right) / 2);
    return Math.max(maxSubArraySum(nums, left, mid), maxSubArraySum(nums, mid + 1, right), maxCrossArraySum(nums, left, mid, right));
}

const maxCrossArraySum = (nums, left, mid, right) => {
    let sum = 0;
    let leftSum = Number.MIN_SAFE_INTEGER;
    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        if (sum > leftSum) {
            leftSum = sum;
        }
    }
    sum = 0;
    let rightSum = Number.MIN_SAFE_INTEGER;
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        if (sum > rightSum) {
            rightSum = sum;
        }
    }
    return leftSum + rightSum;
}