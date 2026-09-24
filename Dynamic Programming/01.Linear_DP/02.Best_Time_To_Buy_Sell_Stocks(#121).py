class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        result = 0
        min_till_now = float("inf")

        for price in prices:
            min_till_now = min(min_till_now, price)
            result = max(result, price - min_till_now)

        return result
