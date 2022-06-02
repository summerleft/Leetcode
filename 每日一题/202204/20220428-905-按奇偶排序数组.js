/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    const len = nums.length;
    let left = 0, right = len - 1;
    while (left < right) {
        while (left < right && nums[left] % 2 === 0) {
            left++;
        }
        while (left < right && nums[right] % 2 === 1) {
            right--;
        }
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return nums;
};