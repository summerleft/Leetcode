/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;

    function backtracking(nums, k, used) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtracking(nums, k, used);
            used[i] = false;
            path.pop();
        }
    }
    return res;
};