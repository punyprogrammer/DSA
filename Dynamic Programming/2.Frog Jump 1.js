/**
 * @param {number[]} stones
 * @return {boolean}
 */
function solve(pos, k, stones, stoneSet, dp) {
    const lastStone = stones[stones.length - 1];
    if (pos === lastStone) return true;
    if (!stoneSet.has(pos)) return false;

    const key = `${pos},${k}`;
    if (dp.has(key)) return dp.get(key);

    let res = false;
    // Try jumps of k-1, k, k+1 (ensure jump > 0)
    for (const jump of [k - 1, k, k + 1]) {
        if (jump > 0 && stoneSet.has(pos + jump)) {
            res = res || solve(pos + jump, jump, stones, stoneSet, dp);
        }
    }
    dp.set(key, res);
    return res;
}

var canCross = function(stones) {
    const stoneSet = new Set(stones);
    const dp = new Map(); // dp[pos][k] = canReachEnd

    // First jump must be 1
    return stoneSet.has(1) && solve(1, 1, stones, stoneSet, dp);
};
