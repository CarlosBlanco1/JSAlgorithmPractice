const characterReplacement = (s, k) => {
    var left = 0;
    var maxLength = 0;

    var charToFreq = new Map();
    var highestFreq = 0;

    for (let right = 0; right < s.length; right++) {
        let newChar = s[right]

        if(charToFreq.has(newChar))
        {
            var curr = charToFreq.get(newChar);
            charToFreq.set(newChar, curr + 1);
        }
        else
        {
            charToFreq.set(newChar, 1);
        }

        if(charToFreq.get(newChar) > highestFreq)
        {
            highestFreq = charToFreq.get(newChar);
        }

        var substringLength = ((right - left) + 1);

        while((substringLength - highestFreq) > k)
        {
            var key = s[left]
            var curr = charToFreq.get(key);
            charToFreq.set(key, curr - 1);

            left++;
            substringLength = ((right - left) + 1);
        }

        if(substringLength > maxLength)
        {
            maxLength = substringLength
        }
    }

    return maxLength;
}

console.log(characterReplacement("ABAB", 2));
// Expected: 4

console.log(characterReplacement("AABABBA", 1));
// Expected: 4

console.log(characterReplacement("AAAA", 0));
// Expected: 4

console.log(characterReplacement("ABCDE", 1));
// Expected: 2

console.log(characterReplacement("BAAAB", 2));
// Expected: 5

console.log(characterReplacement("ABBB", 2));
// Expected: 4

console.log(characterReplacement("ABAA", 0));
// Expected: 2

console.log(characterReplacement("A", 0));
// Expected: 1

console.log(characterReplacement("A", 1));
// Expected: 1

console.log(characterReplacement("AAABBC", 1));
// Expected: 4