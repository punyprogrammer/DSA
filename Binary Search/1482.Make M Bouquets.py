class Solution:
    def valid_solve(self, day, bloomDay, m, k):
        bouquets = 0
        curr_len = 0

        for flower in bloomDay:
            if flower <= day:
                curr_len += 1

                if curr_len == k:
                    bouquets += 1
                    curr_len = 0
            else:
                curr_len = 0

        return bouquets >= m





    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:
        low ,high  = 1,2*max(bloomDay)
        ans = -1
        while low <= high:
            mid = low + (high - low )//2
            if self.valid_solve(mid,bloomDay,m,k):
                ans = mid
                high = mid - 1
            else:
                low = mid + 1
        return ans
