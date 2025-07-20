var maxCoins = function(nums) {
    const n = nums.length;
    // Add imaginary balloons at boundaries
    const balloons = [1, ...nums, 1];
    const memo = Array.from({length: n + 2}, () => Array(n + 2).fill(0));
    
    function solve(left, right) {
        if (left + 1 === right) return 0;
        if (memo[left][right] > 0) return memo[left][right];
        
        let result = 0;
        for (let i = left + 1; i < right; i++) {
            const current = balloons[left] * balloons[i] * balloons[right];
            result = Math.max(result, current + solve(left, i) + solve(i, right));
        }
        memo[left][right] = result;
        return result;
    }
    
    return solve(0, n + 1);
};
