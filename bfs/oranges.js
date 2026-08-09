import Queue from "./queue.js";

function orangesRotting(grid) {
    
    var width = grid[0].length;
    var q = new Queue();
    var areAll2s = true;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < width; j++) {

            if(grid[i][j] == 2)
            {
                q.enqueue([i,j]);
            }
            else if(grid[i][j] == 1)
            {
                areAll2s = false;
            }
        }  
    }

    if(areAll2s) return 0;

    var minutesElapsed = 0;
    var currLevelNodes = q.size();

    while(q.size() > 0)
    {
        if(currLevelNodes == 0)
        {
            minutesElapsed++;
            currLevelNodes = q.size();
        }

        var currCoords = q.dequeue();
        var row = currCoords[0];
        var col = currCoords[1];

        try {
            if(grid[row - 1][col] == 1)
            {
                grid[row - 1][col] = 2;
                q.enqueue([row - 1, col]);
            }
        } catch (error) {
            
        }
        try {
            if(grid[row + 1][col] == 1)
            {
                grid[row + 1][col] = 2;
                q.enqueue([row + 1, col]);
            }
        } catch (error) {
            
        }
        try {
            if(grid[row][col-1] == 1)
            {
                grid[row][col-1] = 2;
                q.enqueue([row, col-1]);
            }
        } catch (error) {
            
        }
        try {
            if(grid[row][col+1] == 1)
            {
                grid[row][col+1] = 2;
                q.enqueue([row, col+1]);
            }
        } catch (error) {
            
        }

        currLevelNodes--;
    }

    var isThereHealthyOranges = false;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < width; j++) {

            if(grid[i][j] == 1)
            {
                isThereHealthyOranges = true;
            }
        }  
    }

    console.log(grid)

    return isThereHealthyOranges ? -1 : minutesElapsed;
}
const testCases = [
    {
        grid: [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
        ],
        expected: 4,
    },
    {
        grid: [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
        ],
        expected: -1,
    },
    {
        grid: [
            [0, 2],
        ],
        expected: 0,
    },
    {
        grid: [
            [1],
        ],
        expected: -1,
    },
    {
        grid: [
            [2, 2],
            [2, 2],
        ],
        expected: 0,
    },
    {
        grid: [
            [2, 1, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [0, 1, 1, 1, 0],
        ],
        expected: 8,
    }
];

for (const { grid, expected } of testCases) {
    // Prevent one test from mutating the next one's grid
    const input = grid.map(row => [...row]);
    const actual = orangesRotting(input);

    console.log({
        actual,
        expected,
        passed: actual === expected,
    });
}