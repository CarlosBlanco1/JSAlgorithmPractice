/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const tab = new Array(amount + 1).fill(Infinity);
    tab[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                tab[i] = Math.min(tab[i], tab[i - coin] + 1);
            }
        }
    }

    return tab[amount] === Infinity ? -1 : tab[amount];
};