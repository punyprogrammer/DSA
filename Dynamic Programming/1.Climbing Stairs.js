/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let prev = 2;   // represents dp[i-1]
    let prev2 = 1;   // represents dp[i-2]
    let res = 0;
    
    for (let i = 3; i <= n; i++) {
        res = prev + prev2;
        prev2 = prev;
        prev = res;
    }
    return res;
};
