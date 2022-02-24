/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let n = nums.length;
    let dp = new Array(n);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i]; 
    }
    let res = -1e4;
    for (const i of dp) {
        res = res > i ? res : i;
    }
    return res;
};

// 分治
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    return maxSubArraySum(nums, 0, nums.length - 1);
};

let maxCrossingSum = function(nums, left, mid, right) {
    let sum = 0;
    let leftSum = Number.MIN_SAFE_INTEGER;
    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(sum, leftSum);
    }
    sum = 0;
    let rightSum = Number.MIN_SAFE_INTEGER;
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(sum, rightSum);
    }
    return (leftSum + rightSum);
}

let maxSubArraySum = function(nums, left, right) {
    if (left === right) {
        return nums[left];
    }
    let mid = Math.floor((left + right) / 2);
    return Math.max(maxSubArraySum(nums, left, mid), maxSubArraySum(nums, mid + 1, right), maxCrossingSum(nums, left, mid, right));

}