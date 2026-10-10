/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {

    let charRange = new Map();

    for (let i = 0; i < s.length; i++) {
        if (charRange.has(s[i])) {
            charRange.get(s[i]).pop();
            charRange.get(s[i]).push(i);
        }
        else {
            charRange.set(s[i], [i, i]);
        }
    }

    let pIndex = 0;
    let partitionSizes = [];

    while (pIndex < s.length) {
        let [lo, hi] = charRange.get(s[pIndex]);

        for (let [k, v] of charRange) {
            if (k !== s[pIndex] &&
                v[0] >= lo &&
                v[0] <= hi) {
                    hi = Math.max(hi, v[1]);
            }
        }

        partitionSizes.push((hi - lo) + 1);
        pIndex = hi + 1;
    }

    return partitionSizes;
};