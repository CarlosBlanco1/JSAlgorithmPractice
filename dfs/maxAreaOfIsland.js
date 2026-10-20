/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let greatestArea = 0;

    let DFS = function(row, col) {
        if( col < 0 || col  >= n || row < 0 || row >= m || grid[row][col] === 0) return 0;

        grid[row][col] = 0;

        return 1 + DFS(row, col - 1) + DFS(row, col + 1) + DFS(row - 1, col) + DFS(row + 1, col);
    }

    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            greatestArea = Math.max(greatestArea, DFS(i, j));
        }
    }

    return greatestArea;
};