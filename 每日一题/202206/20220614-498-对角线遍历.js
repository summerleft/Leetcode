/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    const m = mat.length, n = mat[0].length;
    const maxSum = m + n - 1;
    const res = [];
    let flag = true;
    for (let sum = 0; sum < maxSum; sum++) {
        const [pm, pn] = flag ? [m, n] : [n, m];
        let x = sum < pm ? sum : pm - 1;
        let y = sum - x;
        while (x >= 0 && y < pn) {
            res.push(flag ? mat[x][y] : mat[y][x]);
            x--;
            y++;
        }
        flag = !flag;
    }
    return res;
};