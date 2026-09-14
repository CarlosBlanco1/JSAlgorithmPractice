/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    var tab = new Array(nums.length).fill(Infinity);
    tab[0] = 0;

    let index = 0;

    for(const num of nums) {
        for(let i = index; (i <= (index + num)) && (i < nums.length); i++)
        {
            tab[i] = Math.min(tab[index] + 1, tab[i]);
        }
        index++;
    }

    return tab[nums.length-1];
};