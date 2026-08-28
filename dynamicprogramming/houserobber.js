/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return nums[0] > nums[1] ? nums[0] : nums[1];

    var dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = nums[1];
    dp[2] = nums[2] + dp[0];

    var maxMoney = dp[2] > dp[1] ? dp[2] : dp[1];

    for(let i = 3; i < dp.length; i++)
    {
        dp[i] = Math.max(dp[i-2],dp[i-3]) + nums[i];

        if(dp[i] > maxMoney)
        {
            maxMoney = dp[i];
        }
    }

    return maxMoney;
};