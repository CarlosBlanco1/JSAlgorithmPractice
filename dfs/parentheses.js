/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    return DFS(n);
};

var DFS = function (numPar, memo = {}) {

    if (numPar === 0) return [];
    if (numPar === 1) return ['()'];

    if (numPar in memo) return memo[numPar];

    let solutions = new Map();
    let smallSols = DFS(numPar - 1, memo);

    for (const sol of smallSols) {
        solutions.set(`(${sol})`)
    }

    for (let i = 1; i < numPar; i++) {
        let firstSols = DFS(numPar - i, memo);
        let secondSols = DFS(i, memo);

        for (const sol1 of firstSols) {
            for (const sol2 of secondSols) {
                solutions.set(`${sol1}${sol2}`, true);
            }
        }
    }


    memo[numPar] = [...solutions.keys()];
    
    return memo[numPar];
}