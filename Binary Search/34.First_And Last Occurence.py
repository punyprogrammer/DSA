class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:

        n = len(nums)

        # Find the first occurrence of target.
        # When we find target, continue searching LEFT because
        # there may be another occurrence before mid.
        def first_occ():
            left, right = 0, n - 1

            while left <= right:
                mid = left + (right - left) // 2

                # mid is too large, so search the left half.
                if nums[mid] > target:
                    right = mid - 1

                # mid is too small, so search the right half.
                elif nums[mid] < target:
                    left = mid + 1

                # nums[mid] == target
                else:
                    # mid is the first occurrence if:
                    # 1. mid is the first index, OR
                    # 2. the previous element is different from target.
                    if mid == 0 or nums[mid - 1] != target:
                        return mid

                    # target exists before mid, so continue searching left.
                    right = mid - 1

            # Target was not found.
            return -1

        # Find the last occurrence of target.
        # When we find target, continue searching RIGHT because
        # there may be another occurrence after mid.
        def last_occ():
            left, right = 0, n - 1

            while left <= right:
                mid = left + (right - left) // 2

                # mid is too large, so search the left half.
                if nums[mid] > target:
                    right = mid - 1

                # mid is too small, so search the right half.
                elif nums[mid] < target:
                    left = mid + 1

                # nums[mid] == target
                else:
                    # mid is the last occurrence if:
                    # 1. mid is the last index, OR
                    # 2. the next element is different from target.
                    if mid == n - 1 or nums[mid + 1] != target:
                        return mid

                    # target exists after mid, so continue searching right.
                    left = mid + 1

            # Target was not found.
            return -1

        # Run both binary searches.
        # Result = [first occurrence, last occurrence]
        return [first_occ(), last_occ()]
