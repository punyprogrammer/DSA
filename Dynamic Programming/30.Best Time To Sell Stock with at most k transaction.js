/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
 const n = prices.length;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: 2 }, () => Array(k+1).fill(-1))
  );
  function solve(idx, holding, numTxns) {
    if (idx === n) return 0;
    if (numTxns === k) return 0;
    if (dp[idx][holding][numTxns] !== -1) return dp[idx][holding][numTxns];
    let maxProfit = 0;
    // if no holding
    if (!holding) {
      const buy = -prices[idx] + solve(idx + 1, 1, numTxns);
      const dontBuy = solve(idx + 1, 0, numTxns);
      maxProfit = Math.max(...[buy, dontBuy, maxProfit]);
    } else {
      const sell = prices[idx] + solve(idx + 1, 0, numTxns + 1);
      const dontSell = solve(idx + 1, 1, numTxns);
      maxProfit = Math.max(...[sell, dontSell, maxProfit]);
    }
    dp[idx][holding][numTxns] = maxProfit;
    return maxProfit;
  }
  return solve(0, 0, 0);
};
