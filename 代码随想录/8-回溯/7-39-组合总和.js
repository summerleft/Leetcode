/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    const path = [];
    candidates.sort((a, b) => a - b);
    backtracking(0, 0);
    return result;

    function backtracking(startIndex, sum){
        if (sum === target) {
            result.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] > target - sum) break;
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(i, sum);
            sum -= candidates[i];
            path.pop()
        }
    }
};