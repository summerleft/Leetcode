/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let count = 0, res = Number.MIN_SAFE_INTEGER;
    for (const num of nums) {
        count += num;
        if (count > res) {
            res = count;
        }  
        if (count < 0) {
            count = 0;
        }
    }
    return res;
};