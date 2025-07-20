// Why >= for PSE and > for NSE?
// Handling Duplicates:
// If there are duplicate elements in the array, we need to ensure that each element is counted only once in the subarrays where it is the minimum.
// Using >= for PSE and > for NSE ensures that:
// For a given element nums[i], the PSE is the last occurrence of the same value to its left.
// For a given element nums[i], the NSE is the first occurrence of the same value to its right.
// Avoiding Double Counting:
// If we use >= for both PSE and NSE, the same subarray might be counted multiple times for duplicate elements.
// By using >= for PSE and > for NSE, we ensure that each subarray is counted only once for the rightmost occurrence of the minimum value.

class Solution {
const int mod = 1e9+7;
public:
    int sumSubarrayMins(vector<int>& nums) {
        int n = nums.size();
        vector<int> pse(n,-1);
        vector<int> nse(n,n);
        stack<int> st;
        int ans = 0;
        // find pse for all element;
        for(int i =0;i<n;i++){
            while(!st.empty() && nums[st.top()] >= nums[i]){
                st.pop();
            }
            pse[i] = st.empty()?-1:st.top();
            st.push(i);
        }
        // reuse the same stack
        while(!st.empty()) st.pop();
        // find nse for all element
        for(int i= n-1;i>=0;i--){
            while(!st.empty() && nums[st.top ()] > nums[i]){
                st.pop();
            }
            nse[i] = st.empty()?n:st.top();
            st.push(i);
        }
        // iterate through all the elements for calculae subarrays
        for(int i =0 ;i <n;i++){
             
             long long totalSubArrays = (long long)nums[i] * (i - pse[i]) * (nse[i] - i);
             ans = (ans + totalSubArrays)%mod;
        }
        return ans;

    }
};
