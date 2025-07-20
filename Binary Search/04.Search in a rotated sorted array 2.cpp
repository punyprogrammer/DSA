class Solution {
public:
    bool search(vector<int>& nums, int target) {
       int n = nums.size();
        int l = 0, r = n - 1;
        // We can use same approach ,but if there are duplicates
        // if duplicates then arr[mid] == arr[r] ==arr[l] may occur
        // due to the above condition we cant elimate so we reduce the search space from both end
        // The basic idea is to check which part is sorted and eliminate accordingly 
        while (l <= r) {
            int mid = l + (r - l) / 2;
            
            if (nums[mid] == target) {
                return true;  // Return the index immediately when target is found
            }
            // additonal check for duplicates
            else if(nums[mid] == nums[l] && nums[l] == nums[r]){
                l++;
                r--;
                continue;
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
        
        return false;  // Return -1 if the target is not found
    }
    
};
