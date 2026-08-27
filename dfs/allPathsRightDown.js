/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    return pathDFS(0, 0, [m - 1, n - 1]);

};

var pathDFS = function (row, col, maxCoord, memo = {}) {

    var key = JSON.stringify({ row, col });

    if (key in memo) return memo[key];

    if (row == maxCoord[0] && col == maxCoord[1]) {
        return 1;
    }
    else {
        var numPaths = 0;

        //DOWN
        if (row + 1 <= maxCoord[0]) {
            numPaths += pathDFS(row + 1, col, maxCoord, memo);
        }

        //RIGHT
        if (col + 1 <= maxCoord[1]) {
            numPaths += pathDFS(row, col + 1, maxCoord, memo);
        }

        memo[key] = numPaths;

        return memo[key];
    }
}