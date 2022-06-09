/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let result = [];
    let path = [];
    backtracking(n, k, 1, result, path);
    return result;
};

const backtracking = (n, k, startIndex, result, path) => {
    if (path.length === k) {
        result.push([...path]);
        return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
        path.push(i);
        backtracking(n, k, i + 1, result, path);
        path.pop();
    }
}