var climbStairs = function(n) {
    return climbingStairsDP(n, {});
};

function climbingStairsDP(n, memo = {}) {

    if(n in memo) return memo[n];

    if(n == 0 || n == 1) {
        memo[n] = 1;
        return memo[n];
    }

    memo[n] = climbingStairsDP(n - 1, memo) +  climbingStairsDP(n - 2, memo);

    return memo[n];
}

console.log(climbStairs(5))