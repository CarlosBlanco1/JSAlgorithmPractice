/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prevPrev = cost[0];
    let prev = cost[1];

    for(let i = 2; i < cost.length; i++)
    {
        [prev, prevPrev] = [Math.min(prev, prevPrev) + cost[i], prev];
    }
    
    return Math.min(prev, prevPrev);
};