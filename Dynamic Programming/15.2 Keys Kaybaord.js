/**
 * @param {number} n
 * @return {number}
 */


// dp [n][no_of_characters_copy_last]
function solve(currentLen, n, charsCopied, dp) {

    if (currentLen > n) return 100000;
    if (currentLen === n) return 0;
    if (dp[currentLen][charsCopied] != -1) return dp[currentLen][charsCopied];
    //    we can either copy or past 
    const copy = 2 + solve(currentLen + currentLen, n, currentLen, dp);
    const paste = 1 + solve(currentLen + charsCopied, n, charsCopied, dp);

    dp[currentLen][charsCopied] = Math.min(copy, paste);
    return dp[currentLen][charsCopied];

}
var minSteps = function (n) {
    const dp = new Array(n + 1).fill(null).map(() => Array(n + 1).fill(-1));
    return n > 1 ? 1 + solve(1, n, 1, dp) : 0;
};
