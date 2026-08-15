/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {

    var rows = heights.length;
    var cols = heights[0].length;

    var pacificMatrix =  Array.from({ length: rows }, () => Array(cols).fill('N'));
    var atlanticMatrix =  Array.from({ length: rows }, () => Array(cols).fill('N'));

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < cols; j++)
        {
            if(i == 0 || j == 0)
            {
                pacificTraverser(heights, pacificMatrix, i, j);
            }
            if(j == cols - 1 || i == rows - 1)
            {
                atlanticTraverser(heights, atlanticMatrix, i, j);
            }
        }
    }

    results = [];

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < cols; j++)
        {
            if(pacificMatrix[i][j] == 'R' && atlanticMatrix[i][j] == 'R')
            {
                results.push([i, j]);
            }
        }
    }

    return results;
};

function pacificTraverser(heights, pacificMatrix, r, c) {

    pacificMatrix[r][c] = 'R';

    var currVal = heights[r][c];

    var maxRow = heights.length - 1;
    var maxCol = heights[0].length - 1;

    if ((c - 1) >= 0) {
        var leftCellVal = heights[r][c - 1];

        if (leftCellVal >= currVal && pacificMatrix[r][c -1] == 'N') {
            pacificTraverser(heights, pacificMatrix, r, c - 1);
        }
    }

    if ((r - 1) >= 0) {
        var upperCellVal = heights[r - 1][c];

        if (upperCellVal >= currVal && pacificMatrix[r - 1][c] == 'N') {
            pacificTraverser(heights, pacificMatrix, r - 1, c);
        }
    }

    if ((c + 1) <= maxCol) {
        var rightCellVal = heights[r][c + 1];

        if (rightCellVal >= currVal && pacificMatrix[r][c + 1] == 'N') {
            pacificTraverser(heights, pacificMatrix, r, c + 1);
        }
    }

    if ((r + 1) <= maxRow) {
        var downCellVal = heights[r + 1][c];

        if (downCellVal >= currVal && pacificMatrix[r + 1][c] == 'N') {
            pacificTraverser(heights, pacificMatrix, r + 1, c);
        }
    }
}

function atlanticTraverser(heights, atlanticMatrix, r, c) {

    atlanticMatrix[r][c] = 'R';

    var currVal = heights[r][c];

    var maxRow = heights.length - 1;
    var maxCol = heights[0].length - 1;

    if ((c - 1) >= 0) {
        var leftCellVal = heights[r][c - 1];

        if (leftCellVal >= currVal && atlanticMatrix[r][c -1] == 'N') {
            atlanticTraverser(heights, atlanticMatrix, r, c - 1);
        }
    }

    if ((r - 1) >= 0) {
        var upperCellVal = heights[r - 1][c];

        if (upperCellVal >= currVal && atlanticMatrix[r-1][c] == 'N') {
            atlanticTraverser(heights, atlanticMatrix, r - 1, c);
        }
    }

    if ((c + 1) <= maxCol) {
        var rightCellVal = heights[r][c + 1];

        if (rightCellVal >= currVal && atlanticMatrix[r][c + 1] == 'N') {
            atlanticTraverser(heights, atlanticMatrix, r, c + 1);
        }
    }

    if ((r + 1) <= maxRow) {
        var downCellVal = heights[r + 1][c];

        if (downCellVal >= currVal && atlanticMatrix[r + 1][c] == 'N') {
            atlanticTraverser(heights, atlanticMatrix, r + 1, c);
        }
    }
}