class Solution:
    def findLongestChain(self, pairs: list[list[int]]) -> int:
        pairs.sort(key = lambda x:x[0])
        # after the sort above do n2 lis 
        n = len(pairs)
        dp = [1]*(n)
        max_len  = 1 
        for i in range (1,n):
            for j in range (0,i):
                # check if we can extend 
                if pairs[i][0] > pairs[j][1]:
                    dp[i] = max(dp[i],dp[j]+1)
                    max_len = max(max_len,dp[i])
        return max_len
