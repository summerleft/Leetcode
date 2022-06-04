/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeI = function(nums, k) {
    nums.sort((a, b) => a - b);
    const temp = (nums[nums.length - 1] - k) - (nums[0] + k)
    return temp > 0 ? temp : 0
};