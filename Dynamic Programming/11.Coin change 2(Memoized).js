var change = function(amount, coins) {
    const n = coins.length;
    // Create a 2D memoization table (amount × index)
    const memo = Array.from({ length: amount + 1 }, () => Array(n).fill(-1));
    
    function solve(currAmount, index) {
        if (currAmount === 0) return 1;
        if (currAmount < 0 || index === n) return 0;
        if (memo[currAmount][index] !== -1) return memo[currAmount][index];
        
        // Take the current coin (stay at same index to allow reuse)
        const take = solve(currAmount - coins[index], index);
        
        // Don't take the current coin (move to next index)
        const notTake = solve(currAmount, index + 1);
        
        // Store and return the total combinations
        memo[currAmount][index] = take + notTake;
        return memo[currAmount][index];
    }
    
    return solve(amount, 0);
};
