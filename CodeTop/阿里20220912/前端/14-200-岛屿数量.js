/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const m = grid.length,
          n = grid[0].length;
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(grid, i, j);
                result++;
            }
        }
    }
    return result;
};

const dfs = (grid, i, j) => {
    const m = grid.length,
          n = grid[0].length;
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
        return;
    }
    if (grid[i][j] == 1) {
        grid[i][j] = 0;
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }

}