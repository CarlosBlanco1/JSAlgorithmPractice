/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    var sortedIntervals = intervals.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        else if (a[1] == b[1]) {
            return b[0] - a[0];
        }
        return 1;
    })

    var toRemove = 0;
    var end = sortedIntervals[0][1];

    for (let i = 1; i < sortedIntervals.length; i++) {
        if (sortedIntervals[i][0] < end) {
            toRemove++;
        }
        else
        {
            end = sortedIntervals[i][1];
        }
    }

    return toRemove;
};