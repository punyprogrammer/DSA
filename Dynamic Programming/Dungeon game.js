/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function solve(x, y) {
        // Base case: reached the princess (bottom-right corner)
        if (x === m - 1 && y === n - 1) {
            return Math.max(1, 1 - dungeon[x][y]);
        }
        // Return memoized result if available
        if (memo[x][y] !== -1) {
            return memo[x][y];
        }
        let minHealth = Infinity;
        // Move down (if possible)
        if (x + 1 < m) {
            const downHealth = solve(x + 1, y);
            minHealth = Math.min(minHealth, downHealth);
        }
        // Move right (if possible)
        if (y + 1 < n) {
            const rightHealth = solve(x, y + 1);
            minHealth = Math.min(minHealth, rightHealth);
        }
        // Minimum health needed at (x, y)
        memo[x][y] = Math.max(1, minHealth - dungeon[x][y]);
        return memo[x][y];
    }

    return solve(0, 0);
};
