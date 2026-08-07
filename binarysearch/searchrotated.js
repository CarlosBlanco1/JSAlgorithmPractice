function search(nums, target) {

    if(nums.length == 1)
    {
        return nums[0] == target ? 0 : -1;
    }
    var p1 = 0;
    var p2 = nums.length - 1;

    while (p1 <= p2) {

        var mid = Math.trunc((p2 + p1)/2);

        if(nums[mid] == target)
        {
            return mid;
        }
        if(nums[p1] == target)
        {
            return p1;
        }
        if(nums[p2] == target)
        {
            return p2;
        }

        if(nums[mid] < nums[p2])
        {
            if(target > nums[mid] && target < nums[p2])
            {
                p1 = mid+1;
            }
            else
            {
                p2 = mid-1;
            }
        }
        else
        {
            if(target > nums[p1] && target < nums[mid])
            {
                p2 = mid-1;
            }
            else
            {
                p1 = mid+1;
            }
        }
    }

    return nums[mid] == target? mid : -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));  // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));  // -1
console.log(search([1], 1));                    // 0
console.log(search([1], 0));                    // -1
console.log(search([3, 1], 1));                 // 1
console.log(search([5, 1, 3], 5));              // 0
console.log(search([], 10));                    // -1
console.log(search([1, 2, 3, 4, 5], 2))         // 1