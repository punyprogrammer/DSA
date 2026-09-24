class Solution:
    def numTrees(self, n: int) -> int:
        dp = [0]*(n+1)
        # The idea is that is to select a root and then contrain the left and the right bounds
        def solve(n):
            if n == 0 or n == 1 :
                return 1
            if dp[n]:
                return dp[n]
            # select all possible root values  and mulyiply left and right 
            res = 0 
            for root in range(1,n+1):
                res += solve(root -1) * solve( n - root )
            dp[n] = res
            return res
        return solve(n)
        
        
