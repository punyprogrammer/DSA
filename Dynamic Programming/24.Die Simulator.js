var dieSimulator = function (n, rollMax) {
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 6 }, () => Array(16).fill(null))
  );

  const MOD = 10 ** 9 + 7;

  function solve(idx, lastChar, consecutiveCount) {
    if (idx === n) return 1;

    if (dp[idx][lastChar][consecutiveCount] !== null) {
      return dp[idx][lastChar][consecutiveCount];
    }

    let result = 0;

    for (let i = 0; i < 6; i++) {
      if (i === lastChar && consecutiveCount + 1 > rollMax[i]) continue;

      if (i === lastChar) {
        result = (result + solve(idx + 1, i, consecutiveCount + 1)) % MOD;
      } else {
        result = (result + solve(idx + 1, i, 1)) % MOD;
      }
    }

    dp[idx][lastChar][consecutiveCount] = result;
    return result;
  }

  // We try all 6 initial rolls
  let total = 0;
  for (let i = 0; i < 6; i++) {
    total = (total + solve(1, i, 1)) % MOD;
  }
  return total;
};
