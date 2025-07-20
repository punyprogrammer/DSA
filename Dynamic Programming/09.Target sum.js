/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const sum = nums.reduce((acc, item) => acc + item, 0);
    const n = nums.length;
    
    // Edge cases
    if (Math.abs(target) > sum) return 0;
    if ((sum + target) % 2 !== 0) return 0;
    
    const newTarget = (sum + target) / 2;
    if (newTarget < 0) return 0;  // Additional check for negative target
    
    const dp = Array.from({ length: n + 1 }, () => Array(newTarget + 1).fill(-1));
    
    function solve(idx, currSum) {
        if (currSum === 0 && idx === n) return 1;
        if (idx >= n) return 0;
        if (currSum < 0) return 0;
        if (dp[idx][currSum] !== -1) return dp[idx][currSum];
        
        const takeItem = nums[idx] <= currSum ? solve(idx + 1, currSum - nums[idx]) : 0;
        const notTakeItem = solve(idx + 1, currSum);
        
        dp[idx][currSum] = takeItem + notTakeItem;
        return dp[idx][currSum];
    }
    
    return solve(0, newTarget);
};
