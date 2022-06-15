/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let res = 0;
    if (k === 0) {
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (nums.indexOf(nums[i]) !== i) {
                set.add(nums[i]);
            }
        }
        res = set.size;
    } else {
        const set = new Set(nums);
        set.forEach(item => {
            if (set.has(item + k)) {
                res++;
            }
        })
    }
    return res;
};