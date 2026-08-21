var climbStairs = function(n) {
    if(n == 0) return 1;
    if(n == 1) return 1;

    var left = 1;
    var right = 1;

    for (let i = 2; i <= n; i++) {      
        var curr = left + right;
        left = right;
        right = curr;
    }

    return right;
};

console.log(climbStairs(5))