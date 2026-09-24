class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)
        dp = {}

        # solve(day, holding) = maximum future profit
        # from the current state.
        def solve(day: int, holding: bool) -> int:
            if day >= n:
                return 0

            if (day, holding) in dp:
                return dp[(day, holding)]

            if holding:
                # Hold or sell
                result = max(
                    solve(day + 1, True),
                    prices[day] + solve(day + 2, False)
                )
            else:
                # Buy or skip
                result = max(
                    -prices[day] + solve(day + 1, True),
                    solve(day + 1, False)
                )

            dp[(day, holding)] = result
            return result

        return solve(0, False)
