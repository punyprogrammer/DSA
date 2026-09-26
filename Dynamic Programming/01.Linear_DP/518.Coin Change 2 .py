class Solution:

    def change(self, amount: int, coins: list[int]) -> int:

        n = len(coins)
        dp = {}

        def solve(idx, amount):

            if amount == 0:
                return 1

            if idx == n or amount < 0:
                return 0

            if (amount, idx) in dp:
                return dp[(amount, idx)]

            skip = solve(idx + 1, amount)

            take = solve(idx, amount - coins[idx])

            dp[(amount, idx)] = skip + take

            return dp[(amount, idx)]

        return solve(0, amount)
