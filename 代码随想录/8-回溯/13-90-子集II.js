/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    const result = [];
    const path = [];
    nums.sort((a, b) => a - b);
    backtracking(0);
    return result;

    function backtracking(startIndex) {
        result.push([...path]);
        if (startIndex > nums.length - 1) return;
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop()
        }
    }
};