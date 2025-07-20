var minimumTotal = function(triangle) {
    const n = triangle.length;
    const dp = Array.from({ length: n }, (_, x) => Array(triangle[x].length).fill(Infinity));
    
    function solve(x, y) {
        if (x === n - 1) return triangle[x][y]; // Base case
        if (dp[x][y] !== Infinity) return dp[x][y]; // Memoization
        
        const downPath = solve(x + 1, y);
        const diagPath = solve(x + 1, y + 1);
        
        dp[x][y] = triangle[x][y] + Math.min(downPath, diagPath);
        return dp[x][y];
    }
    
    return solve(0, 0);
};
