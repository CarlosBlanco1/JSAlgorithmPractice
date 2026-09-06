/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let postTab = new Array(nums.length).fill(1);
    let solutionTab = new Array(nums.length).fill(1);

    let left = 1;
    let right = nums.length - 2;

    while(left < nums.length && right > -1)
    {
        solutionTab[left] = solutionTab[left-1] * nums[left-1];
        postTab[right] = postTab[right+1] * nums[right+1];
        left++;
        right--;
    }

    for(let i = 0; i < solutionTab.length; i++)
    {
        solutionTab[i] = solutionTab[i]*postTab[i];
    }

    return solutionTab;
};