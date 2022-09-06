/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const path = [];
    backtracking([]);
    return result;

    function backtracking(used) {
        if (path.length === nums.length) {
            result.push([...path]);
        }
        for (let i = 0; i < nums.length; i++) {
            if ((i > 0 && nums[i] === nums[i - 1]) && !used[i - 1]) continue;
            if (!used[i]) {
                path.push(nums[i]);
                used[i] = true;
                backtracking(used);
                path.pop();
                used[i] = false;
            }
        }
    }

};