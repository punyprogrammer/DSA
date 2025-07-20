class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size();
        int l = 0, r = n - 1;
        // The basic idea is to check which part is sorted and eliminate accordingly 
        while (l <= r) {
            int mid = l + (r - l) / 2;
            
            if (nums[mid] == target) {
                return mid;  // Return the index immediately when target is found
            }
            
            // If the left half is sorted
            if (nums[l] <= nums[mid]) {
                // Check if the target is in the left half
                if (target >= nums[l] && target < nums[mid]) {
                    r = mid - 1;  // Search in the left half
                } else {
                    l = mid + 1;  // Search in the right half
                }
            }
            // If the right half is sorted
            else {
                // Check if the target is in the right half
                if (target > nums[mid] && target <= nums[r]) {
                    l = mid + 1;  // Search in the right half
                } else {
                    r = mid - 1;  // Search in the left half
                }
            }
        }
        
        return -1;  // Return -1 if the target is not found
    }
};
