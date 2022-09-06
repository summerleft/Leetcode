/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [];
    const path = [];
    backtracking(0);
    return result;

    function backtracking(startIndex) {
        result.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
};