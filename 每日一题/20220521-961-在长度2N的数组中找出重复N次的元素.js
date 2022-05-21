/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const set = new Set();
    while (nums.length) {
        let temp = nums.pop();
        if (set.has(temp)) {
            return temp;
        }
        set.add(temp);
    }
};