/**
 * @param {number} n
 * @return {number}
 */
const MOD = 10**9+7;
// solve 
// dp[idx][prev_character]
// 0 ->a
// 1 ->e
// 2 ->i
// 3 ->o
// 4 ->u
function solve(idx,prev_char,n,dp){
    if(idx === n) return 1;
    if(dp[idx][prev_char]!==-1) return dp[idx][prev_char];
    let result = 0;
    if(prev_char === 0){
        result = (result + solve(idx+1,1,n,dp))%MOD;
    }
    if(prev_char === 1){
        result = (result + solve(idx+1,0,n,dp))%MOD;
        result = (result + solve(idx+1,2,n,dp))%MOD;
    }
    if(prev_char === 2){
        result = (result + solve(idx+1,0,n,dp))%MOD;
        result = (result + solve(idx+1,1,n,dp))%MOD;
        result = (result + solve(idx+1,3,n,dp))%MOD;
        result = (result + solve(idx+1,4,n,dp))%MOD;
    }
    if(prev_char === 3){
        result = (result + solve(idx+1,2,n,dp))%MOD;
        result = (result + solve(idx+1,4,n,dp))%MOD;
    }
    if(prev_char === 4){
        result = (result + solve(idx+1,0,n,dp))%MOD;
    }
    dp[idx][prev_char] = result;
    return dp[idx][prev_char];
}
var countVowelPermutation = function(n) {
    const dp = Array(n+1).fill(-1).map(()=>Array(6).fill(-1));
    let result = 0;
    for(let i = 0 ;i<5 ; i++){
        result = (result + solve(1,i,n,dp))%MOD;
    }
    return result;
};
