/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let left = 0, right = nums.length - 1; left < right; left++) {
        res += nums[right--] - nums[left]; 
    }
    return res;
};