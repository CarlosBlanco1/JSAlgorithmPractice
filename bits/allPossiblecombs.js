/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var subs = [];
    var numCombs = Math.pow(2, nums.length);

    for(let i = 0; i < numCombs; i++)
    {
        subs.push(nums.filter((val, ind) => {
            return i & (1 << ind);
        }))
    }

    return subs;
};