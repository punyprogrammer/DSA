var maxProfit = function(prices, fee) {
    const n = prices.length;
    const dp = Array.from({ length: n + 1 }, () => Array(2).fill(-1));

    function solve(index, own) {
        if (index === n) return 0;
        if (dp[index][own] !== -1) return dp[index][own];

        let result;
        if (own) {
            // You own stock, so you can sell or hold
            const sellStock = prices[index] - fee + solve(index + 1, 0);
            const keepStock = solve(index + 1, 1);
            result = Math.max(sellStock, keepStock);
        } else {
            // You don't own stock, so you can buy or skip
            const buyStock = solve(index + 1, 1) - prices[index];
            const dontBuy = solve(index + 1, 0);
            result = Math.max(buyStock, dontBuy);
        }

        dp[index][own] = result;
        return result;
    }

    return solve(0, 0);
};
