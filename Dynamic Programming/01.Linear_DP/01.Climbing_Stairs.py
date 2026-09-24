class Solution:
    def climbStairs(self, n: int) -> int:
        prev_two = 1
        prev = 2

        for _ in range(2, n):
            prev_two, prev = prev, prev + prev_two

        return prev
