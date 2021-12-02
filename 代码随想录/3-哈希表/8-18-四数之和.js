/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const len = nums.length;
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1; 
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum > target) {
                    r--;
                    continue;
                }
                if (sum < target) {
                    l++;
                    continue;
                }
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[++l]);
                while (l < r && nums[r] === nums[--r]);
            }
        }
    }
    return res;
};