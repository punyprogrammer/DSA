class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int n= nums.size();
        // if one element 
        if( n==1 ) return 0 ;
        // if first element is peak
        if(nums[0] > nums[1]) return 0;
        // if last element is peak
        if(nums[n-1] >nums[n-2]) return n-1;
        int l = 1,r = n-2;
        while(l<=r){
            int mid = (l+(r-l)/2);
            // if this is a peak
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid;
            // if mid is on increasing peak ,then peak will be on right 
            if(nums[mid] > nums[mid-1]) l= mid+1;
            // if mid is on decreasing peak ,then peak will be on left
            else if(nums[mid] > nums[mid+1]) r = mid-1;
            // The other edge case in when the current element is a draught
            // Here we can eliminate either halfs 
            // as logically peak is present in both halfs
            else {
                l = mid+1;
            }
        }
        return -1;
    }
};
