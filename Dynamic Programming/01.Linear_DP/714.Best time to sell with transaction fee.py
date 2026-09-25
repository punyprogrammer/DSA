class Solution:
    def maxProfit(self, prices: list[int], fee: int) -> int:
        n = len(prices)
        dp = [[None]*2 for _ in range(n)]
        def solve(idx,own):
            # base 
            if idx == n:
                return 0 
            if  dp[idx][own] is not  None:
                return dp[idx][own]
            # if own can either sell or not sell 
            res = 0 
            if own:
                sell = prices[idx] - fee + solve(idx+1,0)
                keep = solve(idx+1,1)
                res = max(sell,keep)
            else:
                skip  = solve(idx+1,0)
                buy   = -prices[idx] + solve(idx+1,1)
                res = max(skip,buy)
            dp[idx][own] = res
            return res
        return solve(0,0)
