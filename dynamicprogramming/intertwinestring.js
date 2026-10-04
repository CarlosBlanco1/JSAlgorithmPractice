/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if((s1.length + s2.length) != s3.length) return false;

    let [shorter, longer] = s1.length > s2.length ? [s2, s1] : [s1, s2];

    let m = longer.length;
    let n = shorter.length;

    let prev = new Array(m + 1).fill(false);
    let curr = new Array(m + 1).fill(false);
    prev[0] = true;

    for (let i = 1; i < m + 1; i++) {
        prev[i] = (s3[i-1] === longer[i-1]) && (prev[i-1]);
    }

    curr[0] = (s3[0] === shorter[0]) && (prev[0]);

    if(n === 0) return prev[m];

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            curr[j] = (prev[j] && (shorter[i - 1] == s3[i + j - 1]))
                || (curr[j - 1] && (longer[j - 1] == s3[i + j - 1]))
        }
        prev = curr;
    }

    return curr[m];
};