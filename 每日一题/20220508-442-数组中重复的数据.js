/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const len = nums.length;
    const temp = new Array(len).fill(1);
    const res = [];
    for (let i = 0; i < len; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (temp[index] === 1) {
            temp[index] = -1;
        } else {
            res.push(index + 1);
        }
    }
    return res;
};