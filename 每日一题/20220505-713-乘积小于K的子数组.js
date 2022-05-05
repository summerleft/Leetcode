/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let tempRes = 0, tempMultiply = nums[i];
        if (tempMultiply >= k) continue;
        tempRes++;
        if (i !== nums.length - 1) {
            for (let j = i + 1; j < nums.length; j++) {
                tempMultiply *= nums[j];
                if (tempMultiply >= k) break;
                tempRes++;
            }
        }
        res += tempRes; 
    }
    return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    let left = right = 0;
    let res = 0;
    let multiply = 1;
    while (right < nums.length) {
        multiply *= nums[right++];
        while (left < right && multiply >= k) {
            multiply /= nums[left++];
        }
        res += (right - left);
    }
    return res;
};