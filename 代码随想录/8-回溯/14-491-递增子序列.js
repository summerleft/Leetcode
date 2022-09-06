/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
    const result = [];
    const path = [];
    backtracking(0);
    return result;
    function backtracking(startIndex) {
        if (path.length >= 2) {
            result.push([...path]);
        }
        let used = [];
        for (let i = startIndex; i < nums.length; i++) {
            if ((path.length > 0 && nums[i] < path[path.length - 1]) || used[nums[i] + 100]) {
                continue;
            }
            used[nums[i] + 100] = true;
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        } 
    }
};