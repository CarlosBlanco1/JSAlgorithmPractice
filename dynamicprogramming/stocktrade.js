/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;

    let n = prices.length;

    let tab = Array.from({length : 3}, () => new Array(n).fill(0));
    let largestSold = 0;

    tab[0][0] = tab[0][0] - prices[0];
    tab[0][1] = Math.max(tab[0][1] - prices[1], tab[0][0]);

    tab[1][1] = tab[0][0] + prices[1];
    largestSold = Math.max(tab[1][1], largestSold)

    for(let i = 2; i < n; i++)
    {
        //SELL
        tab[1][i] = Math.max(tab[0][i-1], tab[0][i-2]) + prices[i];
        largestSold = Math.max(largestSold, tab[1][i])

        //REST
        tab[2][i] = Math.max(tab[1][i - 2], tab[2][i-1]);

        //BUY
        tab[0][i] = Math.max(tab[2][i] - prices[i], tab[0][i - 1]);
    }

    return largestSold;
};