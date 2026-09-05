/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    let grid = Array.from({ length: text2.length }, () => Array(text1.length).fill(0));
    grid[0][0] = text1[0] == text2[0] ? 1 : 0;

    for (let j = 1; j < text1.length; j++) {
        if (grid[0][j - 1] != 1) {
            if (text2[0] == text1[j]) grid[0][j] = 1;
        }
        else {
            grid[0][j] = grid[0][j - 1];
        }
    }

    for (let i = 1; i < text2.length; i++) {
        for (let j = 0; j < text1.length; j++) {
            if (text2[i] == text1[j]) {
                if (j - 1 < 0) {
                    grid[i][j] = 1;
                }
                else {
                    grid[i][j] = grid[i - 1][j - 1] + 1
                }
            }
            else {
                if (j - 1 < 0) {
                    grid[i][j] = grid[i-1][j];
                }
                else {
                    grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1])
                }
            }
        }
    }

    return grid[text2.length -1][text1.length - 1];
};