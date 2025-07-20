var mincostTickets = function(days, costs) {
    //  we can buy a ticket on any day from [1->n]
    // on a given day we check buying three options
    // terminate when we travel all days
    // dp[
    // const totalDays = days.length;
    // const dp = new Map();
    // return solve(0,days,costs,totalDays,dp);
    const dp = new Map();
    const n = days.length;
      function dfs(i) {
        // Base case: if all days are covered
        if (i >= n) return 0;

        // Check if the result is already memoized
        if (dp.has(i)) return dp.get(i);

        // Option 1: Buy 1-day pass
        let cost1 = costs[0] + dfs(i + 1);

        // Option 2: Buy 7-day pass
        let j = i;
        while (j < n && days[j] < days[i] + 7) j++;
        let cost7 = costs[1] + dfs(j);

        // Option 3: Buy 30-day pass
        j = i;
        while (j < n && days[j] < days[i] + 30) j++;
        let cost30 = costs[2] + dfs(j);

        // Find the minimum cost and memoize it
        const minCost = Math.min(cost1, cost7, cost30);
        dp.set(i, minCost);
        
        return minCost;
    }

    return dfs(0);
};
