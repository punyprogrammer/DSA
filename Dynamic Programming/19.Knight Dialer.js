/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  const rows = 4;
  const cols = 3;
  const MOD = 10 ** 9 + 7;
  const dp = Array.from({ length: rows  }, () =>
    Array.from({ length: cols }, () => Array(n + 1).fill(null))
  );
  const possibleMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  let totalMoves = 0;
  
  function solve(x, y, moves) {
    if (x < 0 || x > rows - 1 || y < 0 || y > cols - 1) return 0;
    if ((x === 3 && y === 0) || (x == 3 && y == 2)) return 0;
    if (moves === 0) return 1;
    if (dp[x][y][moves]) return dp[x][y][moves];
    // go through all paths
    let totalMoves = 0;
    for (let move of possibleMoves) {
      const dx = x + move[0];
      const dy = y + move[1];
      totalMoves = (totalMoves + solve(dx, dy,moves-1)) % MOD;
    }

    dp[x][y][moves] = totalMoves;
    return dp[x][y][moves];
  }
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if((x === 3 && y === 0) || (x == 3 && y == 2)) continue;
      totalMoves = (totalMoves + solve(x, y, n-1)) % MOD;
    }
  }
  return totalMoves;
};
