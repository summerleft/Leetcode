/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const res = [];
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
                continue;
            }
            if (sum > 0) {
                right--;
                continue;
            }
            res.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[++left]);
            while (left < right && nums[right] === nums[--right]);
        }
    }
    return res;
};