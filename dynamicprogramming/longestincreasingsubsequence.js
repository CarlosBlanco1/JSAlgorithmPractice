var lengthOfLIS = function (nums) {

    if (nums.length == 1) return 1;

    var longestSubsequence = 0;
    var tab = new Array(nums.length).fill(0);
    tab[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        var largeSum = tab[0];
        var largeSuccesor = nums[0];

        for (let j = 0; j <= i; j++) {
            if(j == i)
            {
                tab[i] = nums[j] > largeSuccesor ? largeSum + 1: largeSum;
                break;
            }

            if(nums[j] < nums[i])
            {
                if(tab[j] >= largeSum)
                {
                    largeSuccesor = nums[j];
                    largeSum = tab[j];
                }
            }
        }
        longestSubsequence = longestSubsequence > tab[i] ? longestSubsequence : tab[i];
    }

    return longestSubsequence;
};