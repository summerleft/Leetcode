/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let res = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            sum = 0;
        }
        sum += nums[i];
        if (sum > res) {
            res = sum;
        }
    }
    return res;
};