/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    // dp[i] = min cost to reach floor i 
    // dp[n] = cost to reach the top floor 
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0;
    dp[1] = 0;
    // if we start at index 0 
    for(let i = 2;i<=n;i++){
        dp[i] = Math.min(dp[i-2]+cost[i-2],dp[i-1]+cost[i-1]);
    }
    return dp[n];

};
