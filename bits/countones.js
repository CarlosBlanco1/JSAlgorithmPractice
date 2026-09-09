/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n == 0) return [0];
    let tab = new Array(n + 1).fill(0);

    for(let i = 1; i < (n + 1); i++)
    {
        tab[i] = tab[(i & (i - 1))] + 1;
    }

    return tab;
};