class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:

        # Check whether Koko can finish all piles within h hours
        # when eating at speed k.
        def valid_solution(k):
            hours = sum((x + k - 1) // k for x in piles)
            return hours <= h

        # k = 1 is the slowest possible speed.
        # max(piles) is always fast enough.
        low, high = 1, max(piles)

        ans = -1

        while low <= high:
            mid = low + (high - low) // 2

            if valid_solution(mid):
                # mid works, but try to find a smaller valid speed.
                ans = mid
                high = mid - 1
            else:
                # mid is too slow, so increase the speed.
                low = mid + 1

        return ans
