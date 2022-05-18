/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    if (m > n) {
        [m, n] = [n, m];
    }
    let left = 0, right = m * n;
    const check = (x) => {
        let sum = 0;
        for (let i = 1; i <= m; i++) {
            sum += Math.min(n, Math.floor(x / i));
        }
        return sum;
    }
    while (left < right) {
        let mid = (left + right) >> 1;
        if (check(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};