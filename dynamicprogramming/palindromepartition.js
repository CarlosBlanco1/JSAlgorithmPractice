/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (s.length === 1) return [[s]];

    var isPalindrome = function (s) {
        if (s.length === 1 || s.length === 0) return true;

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    var backtrack = function (currstring, memo = {}) {
        if (currstring in memo) return memo[currstring];

        if (currstring.length === 0) {
            memo[currstring] = [];
            return memo[currstring];
        }
        else if (currstring.length === 1) {
            memo[currstring] = currstring;
            return memo[currstring];
        }

        let currpartition = [];

        for (let i = 1; i < currstring.length; i++) {
            let leftHalve = currstring.slice(0, i);
            let rightHalve = currstring.slice(i, currstring.length);

            let isLeftPalindrome = isPalindrome(leftHalve);
            let isRightPalindrome = isPalindrome(rightHalve);

            if (!isLeftPalindrome) continue;

            let rightPartitions = backtrack(rightHalve, memo);

            if(isRightPalindrome && rightHalve.length > 1) currpartition.push([leftHalve, rightHalve])

            for (const rp of rightPartitions) {
                currpartition.push([leftHalve, ...rp])
            }
        }

        memo[currstring] = currpartition;
        return memo[currstring];
    }

    let partitions = backtrack(s);

    if (isPalindrome(s)) partitions.push([s]);

    return partitions;
};