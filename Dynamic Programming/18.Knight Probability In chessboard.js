/**
 * @param {number} n
 * @param {number} k
 * @param {numbern
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1))
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
    function solve(x, y, moves) {
        // return 1 if out of board
        if (x >= n || x < 0 || y >= n || y < 0) return 0;
        // if no pending moves and still in board
        if (moves === 0) return 1;
        if (dp[x][y][moves] !== -1) return dp[x][y][moves];
        let totalProbability = 0.0;
        for (const move of possibleMoves) {
            totalProbability += solve(x + move[0], y + move[1], moves - 1);
        }
        totalProbability = totalProbability / 8;
        dp[x][y][moves] = totalProbability;
        return totalProbability;
    }
    return solve(row, column, k);
};
