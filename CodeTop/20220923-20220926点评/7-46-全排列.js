/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = [],
          path = [];
    backtracking(nums, []);

    function backtracking(nums, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            backtracking(nums, used);
            used[i] = false;
            path.pop();
        }
    }

    return result;
};