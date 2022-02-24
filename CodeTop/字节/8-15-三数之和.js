/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const res = [];
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1; right = nums.length - 1;
        while (left < right) {
            const result = nums[i] + nums[left] + nums[right];            
            if (result < 0) {
                left++;
                continue;
            }
            if (result > 0) {
                right--;
                continue;
            }
            res.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[++left]);
            while (left < right && nums[right] === nums[--right]);
            // if (result === 0)  {
            //     res.push([nums[i], nums[left], nums[right]]);
            //     left++;
            //     right--;
            // } else if (result > 0) {
            //     right--;
            // } else {
            //     left++;
            // }
            // while (left < right && nums[left] === nums[left - 1]) {
            //     left++;
            // }
            // while (left < right && nums[right] === nums[right + 1]) {
            //     right--;
            // }
        }
    }
    return res;
}