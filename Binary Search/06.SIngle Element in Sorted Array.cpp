class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int n = nums.size();

        // Edge cases
        if (n == 1)
            return nums[0];
        if (nums[0] != nums[1])
            return nums[0]; // Single element at the beginning
        if (nums[n - 1] != nums[n - 2])
            return nums[n - 1]; // Single element at the end

        int l = 0, r = n - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;

            // Check if mid is the single element
            if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
                return nums[mid];
            }

            // If mid is even, the single element is on the right if nums[mid]
            // == nums[mid+1] If mid is odd, the single element is on the right
            // if nums[mid] == nums[mid-1]
            if ((mid % 2 == 0 && nums[mid] == nums[mid + 1]) ||
                (mid % 2 == 1 && nums[mid] == nums[mid - 1])) {
                l = mid + 1; // Search in the right half
            } else {
                r = mid - 1; // Search in the left half
            }
        }

        // The problem guarantees a solution, so this line will never be reached
        return -1;
    }
};
