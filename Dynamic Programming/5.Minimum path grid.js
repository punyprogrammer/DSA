/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(-1));
    function solve(x, y) {
        if (x === m - 1 && y === n - 1) {
            return grid[x][y];
        }
        if (dp[x][y] !== -1) {
            return dp[x][y];
        }
        let result = Infinity;
        if (x + 1 <= m - 1) result = Math.min(result, grid[x][y] + solve(x + 1, y));
        if (y + 1 <= n - 1) result = Math.min(result, grid[x][y] + solve(x, y + 1));
        dp[x][y] = result;
        return dp[x][y];
    }
    return solve(0, 0);
};
