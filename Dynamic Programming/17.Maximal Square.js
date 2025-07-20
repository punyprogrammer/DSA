/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    
    const m = matrix.length;
    const n = matrix[0].length;
    const memo = Array(m).fill().map(() => Array(n).fill(-1));
    let maxLen = 0;
    
    function helper(i, j) {
        // Base cases
        if (i >= m || j >= n || matrix[i][j] === '0') {
            return 0;
        }
        
        // Return memoized result if available
        if (memo[i][j] !== -1) {
            return memo[i][j];
        }
        
        // Recursively check right, down, and diagonal
        const right = helper(i, j + 1);
        const down = helper(i + 1, j);
        const diag = helper(i + 1, j + 1);
        
        // Current cell can form a square of size 1 + min of neighbors
        memo[i][j] = 1 + Math.min(right, down, diag);
        maxLen = Math.max(maxLen, memo[i][j]);
        
        return memo[i][j];
    }
    
    // Check every cell as potential top-left corner
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                helper(i, j);
            }
        }
    }
    
    return maxLen * maxLen; // Return area
}
