var numWays = function (steps, arrLen) {
  const MOD = 10 ** 9 + 7;
  const maxPos = Math.min(arrLen - 1, Math.floor(steps / 2));
  const dp = Array.from({ length: maxPos + 1 }, () => Array(steps + 1).fill(-1));

  function solve(pos, stepsLeft) {
    if (pos < 0 || pos > maxPos) return 0;
    if (stepsLeft === 0) return pos === 0 ? 1 : 0;
    if (dp[pos][stepsLeft] !== -1) return dp[pos][stepsLeft];

    let result = 0;
    result = (result + solve(pos, stepsLeft - 1)) % MOD;       // stay
    result = (result + solve(pos - 1, stepsLeft - 1)) % MOD;   // left
    result = (result + solve(pos + 1, stepsLeft - 1)) % MOD;   // right

    dp[pos][stepsLeft] = result;
    return result;
  }

  return solve(0, steps);
};
