/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const result = [];
    const path = [];
    const used = new Array(candidates.length).fill(false);
    candidates.sort((a, b) => a - b);
    backtracking(0, 0, used);

    function backtracking(startIndex, sum, used) {
        if (sum === target) {
            result.push([...path]);
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] > target - sum) break;
            if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
                continue;
            }
            sum += candidates[i];
            path.push(candidates[i]);
            used[i] = true;
            backtracking(i + 1, sum, used);
            sum -= candidates[i];
            used[i] = false;
            path.pop();
        }
    }

    return result;
};