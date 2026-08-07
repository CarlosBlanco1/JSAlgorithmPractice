function lengthOfLongestSubstringTwoDistinct(s) {
    
    var p1 = 0;
    var maxLength = 0;
    var charToFreq = new Map();

    for (let p2 = 0; p2 < s.length; p2++) {
        
        var newChar = s[p2];

        if(charToFreq.has(newChar))
        {
            var curr = charToFreq.get(newChar);
            charToFreq.set(newChar, curr + 1);
        }
        else
        {
            charToFreq.set(newChar, 1);
        }

        if(charToFreq.size < 3)
        {
            var windowSize = (p2 - p1) + 1;
            maxLength = maxLength > windowSize ? maxLength : windowSize;
        }
        else
        {
            while (charToFreq.size > 2) {
                var toRemove = s[p1];
                var value = charToFreq.get(toRemove);

                if(value == 1)
                {
                    charToFreq.delete(toRemove);
                }
                else
                {
                    charToFreq.set(toRemove, value - 1);
                }
                p1++;
            }
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));    // 3
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));  // 5
console.log(lengthOfLongestSubstringTwoDistinct("abcabcabc"));// 2
console.log(lengthOfLongestSubstringTwoDistinct("aaaa"));     // 4
console.log(lengthOfLongestSubstringTwoDistinct("a"));        // 1
console.log(lengthOfLongestSubstringTwoDistinct(""));         // 0
console.log(lengthOfLongestSubstringTwoDistinct("abaccc"));   // 4 ("accc")
console.log(lengthOfLongestSubstringTwoDistinct("ababffzzeee"));// 5 ("zzeee")