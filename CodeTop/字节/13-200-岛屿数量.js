/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let res = 0;
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                dfs(grid, i, j);
            }
        }
    }
    return res;
};

let dfs = function(grid, m, n) {
    let maxHeight = grid.length;
    let maxWidth = grid[0].length;
    grid[m][n] = '2';
    if (m - 1 >= 0 && grid[m - 1][n] === '1') {
        dfs(grid, m - 1, n);
    }
    if (m + 1 < maxHeight && grid[m + 1][n] === '1') {
        dfs(grid, m + 1, n);
    }
    if (n - 1 >= 0 && grid[m][n - 1] === '1') {
        dfs(grid, m, n - 1);
    }
    if (n + 1 < maxWidth && grid[m][n + 1] === '1') {
        dfs(grid, m, n + 1)
    }
}