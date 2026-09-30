```python
class Solution:
    def splitArray(self, nums: list[int], k: int) -> int:

        # Binary search on the answer:
        # "What is the smallest possible value of the largest subarray sum?"

        def solve(max_sum):
            # Greedily construct subarrays while ensuring that
            # every subarray has sum <= max_sum.
            #
            # For a fixed max_sum, we want to use as FEW subarrays
            # as possible. So we keep adding elements to the current
            # subarray until adding the next element would exceed max_sum.
            #
            # Why is this greedy choice valid?
            # Since all nums are positive, adding an element only
            # increases the current sum. Therefore, taking as many
            # elements as possible in the current subarray leaves
            # the fewest elements for the remaining subarrays.
            #
            # If the minimum number of subarrays required <= k,
            # then max_sum is feasible. We can always make additional
            # cuts to get exactly k subarrays.

            subarray_count = 1
            window_sum = 0

            for num in nums:

                # Adding num would exceed the allowed maximum.
                # Therefore, we must start a new subarray.
                if window_sum + num > max_sum:
                    subarray_count += 1
                    window_sum = num

                else:
                    # Greedily keep num in the current subarray
                    # because doing so doesn't violate max_sum.
                    window_sum += num

            return subarray_count <= k

        # Minimum possible answer:
        # At least the largest element must belong to some subarray.
        low = max(nums)

        # Maximum possible answer:
        # Put the entire array into one subarray.
        high = sum(nums)

        ans = high

        while low <= high:

            mid = low + (high - low) // 2

            if solve(mid):
                # mid is feasible.
                # Try to find an even smaller maximum sum.
                ans = mid
                high = mid - 1

            else:
                # mid requires more than k subarrays,
                # so we need to allow a larger maximum sum.
                low = mid + 1

        return ans
```
