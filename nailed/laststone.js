/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    if(stones.length == 1) return stones[0];

    while(true)
    {
        stones.sort((a, b) => a - b);
        let x = stones[stones.length - 2];
        if(x == 0)
        {
            return stones[stones.length - 1];
        }
        else
        {
            stones[stones.length - 2] = 0;
            stones[stones.length - 1] -= x;
        }
    }
};