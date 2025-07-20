/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Memoization table (2D array)
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function solve(x, y) {
        // Base case: reached the bottom-right corner
        if (x === m - 1 && y === n - 1) return 1;
        
        // Check memoization table
        if (memo[x][y] !== -1) return memo[x][y];
        
        let paths = 0;
        // Move right if within bounds
        if (x + 1 < m) paths += solve(x + 1, y);
        // Move down if within bounds
        if (y + 1 < n) paths += solve(x, y + 1);
        
        // Store result in memo table
        memo[x][y] = paths;
        return paths;
    }

    return solve(0, 0);
};
