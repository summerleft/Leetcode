/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const len = nums.length;
    if (len <= 1) return len;
    let preDiff = 0, curDiff = 0;
    let count = 1;
    for (let i = 0; i < len - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        if ((curDiff > 0 && preDiff <= 0)||(curDiff < 0 && preDiff >= 0)) {
            count++;
            preDiff = curDiff;
        }
        
    }
    return count;
};