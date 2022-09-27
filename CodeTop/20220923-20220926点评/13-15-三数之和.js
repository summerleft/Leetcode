/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
            }
            if (sum > 0) {
                right--;
                continue;
            }
            if (sum < 0) {
                left++;
                continue;
            }
            while (left < right && nums[left] === nums[++left]);
            while (left < right && nums[right] === nums[--right]);
        }
    }
    return res;
};