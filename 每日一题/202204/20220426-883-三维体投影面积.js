/**
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let xy = 0;
    let xz = 0;
    let yz = 0;
    for (let i = 0; i < m; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                xy++;
            } 
            temp = temp >= grid[i][j] ? temp : grid[i][j];  
        }
        xz += temp;
    }
    for (let i = 0; i < n; i++) {
        let temp = 0;
        for (let j = 0; j < m; j++) {
            temp = temp >= grid[j][i] ? temp : grid[j][i];
        }
        yz += temp;
    }
    return xy + yz + xz;
};