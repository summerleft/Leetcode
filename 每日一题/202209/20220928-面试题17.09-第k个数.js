/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    const res = [];
    let p3 = p5 = p7 = 0;
    res[0] = 1;
    for (let i = 1; i < k; i++) {
        res[i] = Math.min(res[p3] * 3, res[p5] * 5, res[p7] * 7);
        if (res[i] === res[p3] * 3) p3++;
        if (res[i] === res[p5] * 5) p5++;
        if (res[i] === res[p7] * 7) p7++;
    }
    return res[k - 1];
};