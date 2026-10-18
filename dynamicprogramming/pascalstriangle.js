/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if(numRows === 1) return [[1]];
     
    let rows = [[1], [1,1]];
    let prev = [1,1];

    for(let i = 2; i < numRows; i++)
    {
        let p1 = 0;
        let p2 = 1;
        let curr = [1];

        while(p1 < prev.length && p2 < prev.length)
        {
            curr.push(prev[p1] + prev[p2]);
            p1++;
            p2++;
        }

        curr.push(1);
        rows.push(curr);
        prev = curr;
    }

    return rows;
};