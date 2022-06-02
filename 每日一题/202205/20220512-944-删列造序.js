/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    let res = 0;
    const matrix = strs.map(str => str.split(''));
    if (matrix[0].length === 0) return 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length - 1; j++) {
            if (matrix[j][i] > matrix[j + 1][i]) {
                res++;
                break;
            }
        }
    }
    return res;
};