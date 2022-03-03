/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const len = nums.length;
    const floor = Math.floor(len / 2);
    const temp = [];
    for (let num of nums) {
        temp[num] = temp[num] ? temp[num] + 1 : 1;
        if (temp[num] > floor) return num; 
    }
};