function combinationSum(candidates, target) {
    candidates.sort((a,b) => a - b);

    var solutions = [];

    var backTracking = (sum, subset, startIndex) => {

        if(sum === target)
        {
            solutions.push([...subset]);
            return;
        }

        for(let i = startIndex; i < candidates.length; i++)
        {
            if(candidates[i] + sum > target) break;

            subset.push(candidates[i]);
            backTracking(sum + candidates[i], subset, i);
            subset.pop();
        }
    }

    backTracking(0, [], 0)

    return solutions;
}

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))