/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var constructArray = function(n, k) {
    const res = new Array(n).fill(0);
    const t = n - k - 1;
    for (let i = 0; i < t; i++) {
        res[i] = i + 1;
    }
    for (let i = t, a = n - k, b = n; i < n;) {
        res[i++] = a++;
        if (i < n) res[i++] = b--;
    }
    return res;
};