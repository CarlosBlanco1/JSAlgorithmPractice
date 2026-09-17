/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {

    var solutions = [];
    candidates.sort((a, b) => a - b);

    var backtracking = function (subset, sum, startIndex) {
        if (sum === target) {
            solutions.push([...subset])
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] + sum > target) break;

            if (i > startIndex && candidates[i] == candidates[i - 1]) continue;

            subset.push(candidates[i]);
            backtracking(subset, sum + candidates[i], i + 1);
            subset.pop(candidates[i])
            
        }
    }

    backtracking([], 0, 0);

    return solutions;
};