function validPalindrome(s) {
    stringLength = s.length;

    p1 = 0;
    p2 = stringLength - 1;

    while((p1 < p2))
    {
        if(s[p1] != s[p2])
        { 
            let p1MoveIsPalindrome = isPalindrome(s.slice(p1 + 1, p2 + 1))
            let p2MoveIsPalindrome = isPalindrome(s.slice(p1, p2))

            if(!(p1MoveIsPalindrome || p2MoveIsPalindrome))
            {
                return false;
            }
            else if(p1MoveIsPalindrome)
            {
                p1++;
            }
            else
            {
                p2--;
            }
        }
        else
        {
            p1++;
            p2--;
        }
    }

    return true;
}

function isPalindrome(s) {
    return s == s.split('').reverse().join('');
}



console.log(validPalindrome("aba"));
// Expected: true

console.log(validPalindrome("abca"));
// Expected: true

console.log(validPalindrome("abc"));
// Expected: false

console.log(validPalindrome("deeee"));
// Expected: true

console.log(validPalindrome("racecar"));
// Expected: true

console.log(validPalindrome("radkar"));
// Expected: true

console.log(validPalindrome("cbbcc"));
// Expected: true

console.log(validPalindrome("abcdefdba"));
// Expected: false

console.log(validPalindrome("a"));
// Expected: true

console.log(validPalindrome("ab"));
// Expected: true

console.log(validPalindrome("eeccccbebaeeabebccceea"));
// Expected: false

console.log(validPalindrome("abca"))
// Expected : true

console.log(validPalindrome("abaab"))
// Expected : true

console.log(validPalindrome("baaba"))
// Expected : true