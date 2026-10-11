/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let records = [];
    let divisibles = new Array(Math.ceil(Math.ceil(nums.length/32)/32)).fill(0);

    for(let i = 0; i < Math.ceil(nums.length / 32); i++)
    {
        records.push(0);
    }

    for(let i = 0; i < nums.length; i++)
    {

        if(nums[i] % 32 != 0)
        {
            let key = Math.floor(nums[i] / 32);
            let mask = 1 << ((nums[i] % 32) - 1)
            if((records[key] & mask) !== 0) return nums[i];
            records[key] |= mask;
        }
        else
        {
            let key = Math.floor((nums[i] / 32)/32);
            let mask = 1 << ((nums[i] / 32) % 32)

            if((divisibles[key] & mask) !== 0) return nums[i];
            divisibles[key] |= mask;
        }
    }

    return -1;
};