class Solution:
    def validWeight(self, weights, days, weight):
        days_to_ship = 0
        idx = 0
        n = len(weights)
        curr_window = 0

        while idx < n:
            while idx < n and curr_window + weights[idx] <= weight:
                curr_window += weights[idx]
                idx += 1

            days_to_ship += 1
            curr_window = 0

        return days_to_ship <= days
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        n = len(weights)
        low ,high  = max(weights) ,sum(weights)
        ans = -1
        while low <= high :
            mid = (low + (high - low)//2)
            if  not self.validWeight(weights,days,mid):
                low  = mid+1
            else :
                ans = mid
                high = mid-1
        return ans
