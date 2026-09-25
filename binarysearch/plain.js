/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if(nums.length === 1) return nums[0] === target ? 0 : -1;

    var l = 0;
    var r = nums.length - 1;

    while(l < r)
    {
        var mid = l + Math.floor((r - l) / 2);
        if(nums[mid] === target)
        {
            return mid;
        }
        else if(nums[mid] < target)
        {
            l = mid + 1;
        }
        else
        {
            r = mid - 1;
        }
    }

    return nums[l] === target ? l : -1;
};
