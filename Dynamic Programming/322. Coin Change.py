class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        dp = [float("inf")]*(amount + 1)
        dp[0]=0
        for x in range(1,amount+1):
            for  i in coins:
                if x >=i:
                    dp[x] = min(dp[x-i]+1,dp[x])
        if dp[amount] == float("inf"):
            return -1
        return dp[amount]
           
