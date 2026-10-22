/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let n = piles.length;

    let p2 = Math.max(...piles);
    let p1 = 1;

    let tab = new Array(n);

    while(p1 <= p2)
    {
        let mid = Math.floor((p2 + p1) / 2);

        tab[0] = Math.ceil(piles[0] / mid);

        for(let i = 1; i < n; i++)
        {
            tab[i] = tab[i - 1] + Math.ceil(piles[i] / mid);
        }

        if(tab[n - 1] > h)
        {
            p1 = mid + 1;
        }
        else
        {
            p2 = mid - 1;
        }
    }

    return p1;;
};