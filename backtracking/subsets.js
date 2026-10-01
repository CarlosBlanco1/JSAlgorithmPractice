/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);

    var backTracking = function (startIndex, subset, subsets) {
        subsets.push(subset);

        if (startIndex >= nums.length) return;

        let last = nums[startIndex];
        backTracking(startIndex + 1, [...subset, last], subsets);

        for (let i = startIndex + 1; i < nums.length; i++) {
            if (nums[i] != last) backTracking(i + 1, [...subset, nums[i]], subsets);
            last = nums[i];
        }
    }

    let subsets = [];
    backTracking(0, [], subsets);

    return subsets;
};