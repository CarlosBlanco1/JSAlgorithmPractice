/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {

    let n = hand.length;

    if (n % groupSize !== 0) return false;

    hand.sort((a, b) => a - b);

    let numToFreq = new Map();

    for(let i = 0; i < n; i++)
    {
        numToFreq.set(hand[i], (numToFreq.get(hand[i]) ?? 0 ) + 1);
    }

    let DFS = function (currGroupSize, prev) {
        if(currGroupSize === groupSize)
        {
            return true;
        }

        if(numToFreq.get(prev + 1))
        {
            currGroupSize++;
            numToFreq.set(prev + 1, numToFreq.get(prev + 1) - 1);
            prev = prev + 1;
            return DFS(currGroupSize, prev);
        }
        else
        {
            return false;
        }
    }

    for (let i = 0; i < n; i++) {

        if(numToFreq.get(hand[i]))
        {
            numToFreq.set(hand[i], numToFreq.get(hand[i]) - 1);
            if(!DFS(1, hand[i])) return false;
        }
    }

    return true;
};