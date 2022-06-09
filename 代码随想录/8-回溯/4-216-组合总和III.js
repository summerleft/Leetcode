/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const res = [];
    const path = [];
    backtracking(k, n, 1, res, path);
    return res;
};

const backtracking = (k, n, startIndex, res, path) => {
    if (sum(path) > n) return;
    if (path.length === k && sum(path) === n) {
        res.push([...path]);
        return;
    }
    for (let i = startIndex; i <= 10 - (k - path.length); i++) {
        path.push(i);
        backtracking(k, n, i + 1, res, path);
        path.pop();
    }
}

const sum = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
}