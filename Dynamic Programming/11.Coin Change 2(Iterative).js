/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const  dp = Array(amount+1).fill(0);
    const n = coins.length;
    dp[0] = 1;
    // Fix the coin first to avoid permutations
    for(let coin of coins){ 
        for(let j = coin;j<=amount;j++){
            dp[j]+=(dp[j - coin])
        }
    }
    return dp[amount];
};
