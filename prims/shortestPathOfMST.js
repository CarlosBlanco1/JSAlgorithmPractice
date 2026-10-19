/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let n = points.length;

    let included = new Map();

    let minDist = new Array(n).fill(Infinity);
    minDist[0] = 0;

    let totalCost = 0;

    while(included.size < n)
    {
        let currLowest = Infinity;
        let currPoint = null;

        for(let i = 0; i < n; i++)
        {
            if(minDist[i] < currLowest && !included.has(i))
            {
                currLowest = minDist[i];
                currPoint = i;
            }
        }

        included.set(currPoint, true);
        totalCost += currLowest;

        for(let i = 0; i < n; i++)
        {
            let p1 = points[currPoint];
            let p2 = points[i];
            let dist = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

            minDist[i] = Math.min(minDist[i], dist);
        }
    }

    return totalCost;
};