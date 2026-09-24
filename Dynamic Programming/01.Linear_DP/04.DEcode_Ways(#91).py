class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0] * (n + 1)

        def solve(pos):
            if pos == n:
                return 1

            if s[pos] == "0":
                return 0

            if dp[pos]:
                return dp[pos]

            # Take one digit
            ways = solve(pos + 1)

            # Take two digits
            if pos + 1 < n and int(s[pos:pos + 2]) <= 26:
                ways += solve(pos + 2)

            dp[pos] = ways
            return ways

        return solve(0)
