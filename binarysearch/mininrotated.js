/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    if(nums.length == 2) return Math.min(nums[0], nums[1]);

    var p1 = 0;
    var p2 = nums.length - 1;
    var min = nums[0];

    while(p1 < p2)
    {
        var mid = Math.floor((p1 + p2) / 2);

        if(nums[mid] < nums[p2])
        {
            min = Math.min(min, nums[mid]);
            p2 = mid - 1;
        }
        else
        {
            min = Math.min(min, nums[p1]);
            p1 = mid + 1;
        }
    }

    return Math.min(nums[p1], min);
};