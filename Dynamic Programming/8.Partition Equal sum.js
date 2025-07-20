/**
 * @param {number[]} nums
 * @return {boolean}
 */
function solve(idx, remainingSum, nums, dp, n) {
    // base case 
    if (remainingSum === 0) return true;
    if (idx >= n || remainingSum < 0) return false;
    if (dp[idx][remainingSum] !== -1) return dp[idx][remainingSum];
    // either include current element or not 
    const include = remainingSum >= nums[idx] ? solve(idx + 1, remainingSum - nums[idx], nums, dp, n) : false;
    const exclude = solve(idx + 1, remainingSum, nums, dp, n);
    dp[idx][remainingSum] = include || exclude;
    return dp[idx][remainingSum];
}
var canPartition = function (nums) {
    const n = nums.length;
    const sum = nums.reduce((accum, curr) => accum + curr, 0);
    if (sum % 2 === 1) return false;
    const dp = new Array(n + 1).fill(null).map(() => Array(sum / 2 + 1).fill(-1));
    // use 1 based indexing 

    return solve(0, sum / 2, nums, dp, n);
};
