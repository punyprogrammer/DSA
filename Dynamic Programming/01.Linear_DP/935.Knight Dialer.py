class Solution:
    def knightDialer(self, n: int) -> int:
        MOD = 10**9 + 7

        dp = {}

        moves = [
            (2, 1),
            (2, -1),
            (-2, 1),
            (-2, -1),
            (1, 2),
            (1, -2),
            (-1, 2),
            (-1, -2),
        ]

        def valid_move(x, y):
            return (
                0 <= x < 4
                and 0 <= y < 3
                and not (x == 3 and y in (0, 2))
            )

        def solve(idx, x, y):
            if idx == n:
                return 1

            if (idx, x, y) in dp:
                return dp[(idx, x, y)]

            res = 0

            for dx, dy in moves:
                x2 = x + dx
                y2 = y + dy

                if valid_move(x2, y2):
                    res += solve(idx + 1, x2, y2)
                    res %= MOD

            dp[(idx, x, y)] = res

            return res

        res = 0

        for x in range(4):
            for y in range(3):
                if x == 3 and y in (0, 2):
                    continue

                res += solve(1, x, y)
                res %= MOD

        return res
