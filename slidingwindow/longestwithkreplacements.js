/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    if(s.length == 1)
    {
        return 1;
    }

    var longestChain = 0;
    var l = 0;
    var r = 1;
    var chars = new Map();
    chars.set(s[l], 1);

    while(r < s.length)
    {
        if(chars.has(s[r]))
        {
            chars.set(s[r], chars.get(s[r]) + 1);
        }
        else
        {
            chars.set(s[r], 1);
        }

        const mostCommon = [...chars.entries()].reduce((max, current) => current[1] > max[1] ? current : max);
        var chainLength = ((r - l) + 1);

        if( ( chainLength - mostCommon[1] ) <= k)
        {
            longestChain = longestChain > chainLength ? longestChain : chainLength;
            r++;
        }
        else
        {
            chars.set(s[l], chars.get(s[l]) - 1);
            l++;
            chars.set(s[r], chars.get(s[r]) - 1);
        }

    }

    return longestChain;
};