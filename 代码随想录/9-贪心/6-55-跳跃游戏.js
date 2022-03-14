/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    const len = nums.length;
    let cover = 0;
    for (let i = 0; i < len; i++) {
        if (i > cover) break;
        cover = Math.max(cover, i + nums[i]);
        if (cover >= len - 1) {
            return true;
        }
    }
    return false;
};