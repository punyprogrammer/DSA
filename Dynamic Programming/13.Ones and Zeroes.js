/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function init3DArray(a, b, c, fillValue = -1) {
  return Array.from({ length: a }, () =>
    Array.from({ length: b }, () => Array(c).fill(fillValue))
  );
}
var findMaxForm = function (strs, totalZeroes, totalOnes) {
  const len = strs.length;
  const dp = init3DArray(len, totalZeroes + 1, totalOnes + 1);
  function solve(idx, x, y) {
    if (x > totalZeroes || y > totalOnes) {
      return 0;
    }
    if (idx === len) return 0;
    if (dp[idx][x][y] !== -1) return dp[idx][x][y];
    const numOfOnes = strs[idx]
      ?.split("")
      .reduce((acc, item) => acc + (item === "1"), 0);
    const numOfZeroes = strs[idx].length - numOfOnes;
    const includeItem =
      x + numOfZeroes <= totalZeroes && y + numOfOnes <= totalOnes
        ? 1 + solve(idx + 1, x + numOfZeroes, y + numOfOnes)
        : 0;
    const leaveItem = solve(idx + 1, x, y);
    let result = 0;
    result = Math.max(includeItem, leaveItem);
    dp[idx][x][y] = result;
    return result;
  }
  return solve(0, 0, 0);
};
