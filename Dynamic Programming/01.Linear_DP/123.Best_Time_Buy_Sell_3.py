class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)
        dp = {}
        def solve(idx,own,txns):
            if idx == n:
                return 0 
            if txns >= 2:
                return 0 
            if (idx,own,txns) in dp:
                return dp[(idx,own,txns)]
            res = 0 
            # if own
            if own:
                sell = prices[idx] + solve(idx+1,False,txns+1)
                keep = solve(idx+1,True,txns)
                res = max(sell,keep)
            else:
                buy = -prices[idx] + solve(idx+1,True,txns)
                skip = solve(idx+1,False,txns)
                res = max(buy,skip)
            dp[(idx,own,txns)] = res
            return res
        return solve(0,False,0)

