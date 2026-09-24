class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        prev_two = 0
        prev_one = 0

        for i in range(2, len(cost) + 1):
            current = min(
                prev_one + cost[i - 1],
                prev_two + cost[i - 2]
            )

            prev_two = prev_one
            prev_one = current

        return prev_one
