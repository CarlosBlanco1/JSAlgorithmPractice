/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let largestSum = nums[0];
    let currSum = nums[0];

    let l = 1
    largestSum = largestSum > currSum ? largestSum : currSum;

    while(l < nums.length)
    {
        currSum += nums[l];

        if(nums[l] > currSum)
        {
            currSum = nums[l];
        }
        
        l++;
        largestSum = largestSum > currSum ? largestSum : currSum;
    }

    return largestSum;
};