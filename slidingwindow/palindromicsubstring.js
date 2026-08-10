var countSubstrings = function(s) {
    var validPalindromes = 0;
    var windowSize = 1;

    while(windowSize <= s.length)
    {
        for(let i = 0; (i + windowSize) <= s.length; i++)
        {
            if(isPalindrome(s.slice(i, windowSize + i)))
            {
                validPalindromes++;
            }
        }
        windowSize++;
    }

    return validPalindromes;
};

function isPalindrome(s) {
    var p1 = 0;
    var p2 = s.length - 1;

    while(p1 <= p2)
    {
        if(s[p1] != s[p2]) return false;

        p1++;
        p2--;
    }

    return true;
}