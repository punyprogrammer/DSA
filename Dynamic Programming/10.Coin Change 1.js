/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(-1);
  function solve(currAmount) {
    if (currAmount === 0) return 0;
    if (currAmount < 0) return Infinity;
    if (dp[currAmount] !== -1) return dp[currAmount];
    // try out all coins
    let result = Infinity;
    for (let coin of coins)
      if (coin <= currAmount)
        result = Math.min(result, 1 + solve(currAmount - coin));
    dp[currAmount] = result;
    return result;
  }
  const ans = solve(amount);
  return ans === Infinity ? -1 : ans;
};
