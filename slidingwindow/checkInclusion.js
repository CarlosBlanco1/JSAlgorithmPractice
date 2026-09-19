/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var s1Map = new Map();

    for(let i = 0; i < s1.length; i++)
    {
        s1Map.set(s1[i], (s1Map.get(s1[i]) ?? 0) + 1);
    }

    var left = 0;
    var right = 0;

    var expectedLength = s1Map.size;
    var currLength = 0;

    var currWindow = new Map();

    while(right < s2.length)
    {
        if(currLength == expectedLength)
        {
            return true;
        }

        if(s1Map.has(s2[right]))
        {
            currWindow.set(s2[right], (currWindow.get(s2[right]) ?? 0) + 1);

            if(s1Map.get(s2[right]) == currWindow.get(s2[right])){
                currLength++;
            }
            else if(s1Map.get(s2[right]) < currWindow.get(s2[right]))
            {
                while(s1Map.get(s2[right]) < currWindow.get(s2[right]))
                {
                    if(s1Map.get(s2[left]) && s1Map.get(s2[left]) == currWindow.get(s2[left]))currLength--;
                    currWindow.set(s2[left], (currWindow.get(s2[left]) ?? 0) == 0 ? 0 :  (currWindow.get(s2[left]) ?? 0) - 1);
                    left++;
                }
            }
        }
        else
        {
            left = right;
            currLength = 0;
            currWindow = new Map();
        }
        right++;
    }

    return currLength == expectedLength;
};