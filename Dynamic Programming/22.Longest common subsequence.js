/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));
  function solve(idx1, idx2) {
    if (idx1 < 0 || idx2 < 0) return 0;
    if (dp[idx1][idx2]!==-1) return dp[idx1][idx2];
    // if match
    let maxLen = 0;
    if (text1[idx1] === text2[idx2]) {
      maxLen = Math.max(maxLen, 1 + solve(idx1 - 1, idx2 - 1));
    } else {
      maxLen = Math.max(solve(idx1, idx2 - 1), solve(idx1 - 1, idx2));
    }
    dp[idx1][idx2] = maxLen;
    return maxLen;
  }
  return solve(m - 1, n - 1);
};
