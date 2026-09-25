class Solution:
    def canPartition(self, nums: list[int]) -> bool:
        n = len(nums)
        total = sum(nums)

        if total % 2:
            return False

        target = total // 2

        # dp[idx][val]
        # None = state not calculated yet
        # True/False = calculated result
        dp = [[None] * (target + 1) for _ in range(n)]

        def solve(idx, val):
            if val == 0:
                return True

            if idx == n:
                return False

            if dp[idx][val] is not None:
                return dp[idx][val]

            # Include current number
            include = (
                solve(idx + 1, val - nums[idx])
                if val >= nums[idx]
                else False
            )

            # Don't include current number
            exclude = solve(idx + 1, val)

            dp[idx][val] = include or exclude

            return dp[idx][val]

        return solve(0, target)
