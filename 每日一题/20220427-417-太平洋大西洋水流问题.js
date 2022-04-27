/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = heights.length;
    const n = heights[0].length;
    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const dfs = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        for (let dir of dirs) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[row][col]) {
                dfs(newRow, newCol, ocean);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
    }

    for (let i = 1; i < n; i++) {
        dfs(0, i, pacific);
    }

    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic);
    }

    for (let i = 0; i < n - 1; i++) {
        dfs(m - 1, i, atlantic);
    }

    const result = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = heights.length;
    const n = heights[0].length;
    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const bfs = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        const queue = [];
        queue.push([row, col]);
        while (queue.length) {
            const cell = queue.shift();
            for (const dir of dirs) {
                const newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[row][col]) {
                    ocean[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        bfs(i, 0, pacific);
    }

    for (let i = 1; i < n; i++) {
        bfs(0, i, pacific);
    }

    for (let i = 0; i < m; i++) {
        bfs(i, n - 1, atlantic);
    }

    for (let i = 0; i < n - 1; i++) {
        bfs(m - 1, i, atlantic);
    }

    const result = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};