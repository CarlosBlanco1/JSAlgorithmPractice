/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var combinations = new Map();
    var nums = new Map(candidates.map(cand => [cand, 1]));

    candidates.forEach((num) => {
        recurseSums(num, [num], nums, combinations, target);
    })

    return [...combinations.keys()].map(val => JSON.parse(val));
};

function recurseSums(currSum, curr, nums, combinations, target)
{
    if(currSum == target)
    {
        curr.sort();
        combinations.set(JSON.stringify(curr), 1);
    }
    else if(currSum < target)
    {
        for(const num of nums.keys())
        {
            recurseSums(num + currSum, [...curr, num] , nums, combinations, target)
        }
    }
}