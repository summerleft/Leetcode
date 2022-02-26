/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const res = [];
    let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let size = (right + 1) * (bottom + 1);
    
    while (size > 0) {
        for (let i = left; i <= right; i++) {
            if (size) {
                res.push(matrix[top][i]);
                size--;
            }
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            if(size) {
                res.push(matrix[i][right]);
                size--;
            }
        }
        right--;
        for (let i = right; i >= left; i--) {
            if (size) {
                res.push(matrix[bottom][i]);
                size--;
            } 
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            if (size) {
                res.push(matrix[i][left]);
                size--;
            }  
        }
        left++;       
    }
    return res;
};