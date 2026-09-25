class Solution:
    def wiggleMaxLength(self, nums: list[int]) -> int:
        # lis variation 
        n = len(nums)
        dp = [[1]*2 for _ in range(n)]
        max_len = 1
        # we have two sub indexes 
        # 0 for increase
        # 1 for decrease 
        for i in range(n):
            for j in range(0,i):
                # postive to negative transition 
                if nums[i] < nums[j]:
                    dp[i][1] = max(dp[i][1],dp[j][0]+1)
                # negative to positive 
                if nums[i] > nums[j]:
                    dp[i][0] = max(dp[i][0],dp[j][1]+1)
                max_len = max(max_len,dp[i][0],dp[i][1])
        return max_len
