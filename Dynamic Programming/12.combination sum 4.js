/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const n = nums.length;
    // Create a 2D memoization table (amount × index)
    const memo = Array(target + 1).fill(-1);

    function solve(currAmount) {
        if (currAmount === 0) return 1;
        if (currAmount < 0) return 0;
        if (memo[currAmount] !== -1) return memo[currAmount];
        let result = 0;
        for (let num of nums) result += solve(currAmount - num);
        memo[currAmount] = result;
        return memo[currAmount];
    }

    return solve(target);
};
