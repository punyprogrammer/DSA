/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Map();
  function solve(currSum) {
    if (currSum === 0) return 0;
    if (currSum < 0) return 0;
    if (dp.has(currSum)) return dp.get(currSum);
    let minSquares = Infinity;
    for (let i = 1; i * i <= currSum; i++) {
      minSquares = Math.min(minSquares, 1 + solve(currSum - i * i));
    }
    dp.set(currSum, minSquares);
    return dp.get(currSum);
  }
  return solve(n);
};
