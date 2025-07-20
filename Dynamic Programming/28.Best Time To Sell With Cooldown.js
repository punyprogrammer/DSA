/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  // dp state dp[idx][holding][cooldown]
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: 2 }, () => Array(2).fill(-1))
  );
  function solve(idx, holding, cooldown) {
    if (idx === n) return 0;
    if (dp[idx][holding][cooldown] !== -1) return dp[idx][holding][cooldown];
    let maxProfit = 0;
    // buy scenario
    if (!holding && !cooldown) {
      const buyStock = -prices[idx]+solve(idx + 1, 1, 0);
      const dontBuy = solve(idx+1,0,0);
      maxProfit = Math.max(...[maxProfit, buyStock,dontBuy]);
    } else if (!holding && cooldown) {
      maxProfit = Math.max(maxProfit, solve(idx + 1, holding, 0));
    }

    // sell scenario
    if (holding) {
      const sell = prices[idx] +  solve(idx + 1, 0, 1);
      const dontSell = solve(idx + 1, holding, 0);
      maxProfit = Math.max(...[sell, dontSell, maxProfit]);
    }
    dp[idx][holding][cooldown] = maxProfit;
    return maxProfit;
  }
  return solve(0, 0, 0);
};
