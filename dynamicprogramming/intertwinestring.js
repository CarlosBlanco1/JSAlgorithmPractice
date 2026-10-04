/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let [shorter, longer] = s1.length > s2.length ? [s2, s1] : [s2, s1];

    let m = longer.length;
    let n = shorter.length;

    let tab = Array.from({length : n}, () => new Array(m).fill(false));

    let s3Ind = 0;
    let rowInd = 0;
    let colInd = 0;

    while(colInd < m && rowInd < n)
    {
        if(longer[colInd] == s3[s3Ind])
        {
            tab[rowInd][colInd] = true;
            colInd++;
            s3Ind++;
        }
        else if(shorter[rowInd] == s3[s3Ind])
        {
            tab[rowInd][colInd] = true;
            rowInd++;
            s3Ind++;
        }
    }
    
    return s3Ind === s3.length;
};