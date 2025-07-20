class Solution {
public:
    int findMin(vector<int>& nums) {
        //  use left half and right sorted concept
        int n = nums.size();
        int ans = INT_MAX;
        int l = 0 ,r = n-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            // if left half is sorted then we can set the leftmost as a probable min and discard the left search space as min can never be greater than arr[l]
            if(nums[l] <= nums[mid]){
                ans = min(ans,nums[l]);
                l = mid+1;
            }
            // else if right half is sorted compare with nums[mid] discard right half
            else if(nums[mid] <= nums[r]){
                ans = min(ans,nums[mid]);
                r = mid - 1;
            }
           
        }
        return ans;
    }
};
