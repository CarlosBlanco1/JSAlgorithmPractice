/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if(amount == 0) return 1;

    let dp = Array.from({ length: coins.length + 1 }, () => Array(amount + 1).fill(0));

    for(let i = 1; i <= coins.length; i++)
    {
        for(let j = 1; j <= amount; j++)
        {
            dp[i][j] = dp[i-1][j];

            if(j === (coins[i-1])){
                dp[i][j] += 1;
            }

            if(coins[i-1] < j)
            {
                dp[i][j] += dp[i][j - coins[i-1]]
            }
        }
    }

    return dp[coins.length][amount];  
};