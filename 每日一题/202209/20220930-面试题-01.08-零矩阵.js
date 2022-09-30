/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length,
          n = matrix[0].length;
    const zeroRow = new Set(),
          zeroCol = new Set();
    for (let i = 0; i < m; i++) {
        if (matrix[i].includes(0)) {
            zeroRow.add(i);
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    zeroCol.add(j);
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zeroRow.has(i) || zeroCol.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};