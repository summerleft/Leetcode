/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        const maxCount = len - i;
        if (i === 0) {
            if (nums[i] >= maxCount) {
                return maxCount;
            }
        } else {
            if (nums[i] >= maxCount && nums[i - 1] < maxCount) {
                return maxCount;
            }
        }
    }
    return -1;
};