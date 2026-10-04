/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if(s1.length == 0 && s2.length == 0) return s3.length === 0;
    if((s1.length + s2.length) != s3.length) return false;

    let [shorter, longer] = s1.length > s2.length ? [s2, s1] : [s2, s1];

    let m = longer.length;
    let n = shorter.length;

    let tab = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));
    tab[0][0] = true;

    for (let i = 1; i < m + 1; i++) {
        tab[0][i] = (s3[i-1] === longer[i-1]) && (tab[0][i-1]);
    }

    for (let i = 1; i < n + 1; i++) {
        tab[i][0] = (s3[i-1] === shorter[i-1]) && (tab[i-1][0]);
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            tab[i][j] = (tab[i - 1][j] && shorter[i - 1] == s3[i + j - 1])
                || (tab[i][j - 1] && longer[j - 1] == s3[i + j - 1])
        }
    }
    
    return tab[n][m];
};