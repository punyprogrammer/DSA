class Solution:
    def rob(self, nums: list[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if  n ==2:
            return max(nums[0],nums[1])
        prev = max(nums[0],nums[1])
        prev_second = nums[0]
        res = 0 
        for i in range(2,n):
            res = max(
                prev,  # skip this 
                prev_second + nums[i] # rob this 
                )
            prev_second  = prev
            prev = res
        return res
