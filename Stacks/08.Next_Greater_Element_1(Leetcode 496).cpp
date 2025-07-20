#include <vector>
#include <stack>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        // Create a map to store the next greater element for each element in nums2
        unordered_map<int, int> nextGreaterMap;

        // Use a stack to find the next greater element for each element in nums2
        stack<int> st;

        // Traverse nums2 from right to left
        for (int i = nums2.size() - 1; i >= 0; i--) {
            // Pop elements from the stack that are smaller than the current element
            while (!st.empty() && nums2[i] >= st.top()) {
                st.pop();
            }

            // If the stack is empty, there is no greater element to the right
            if (st.empty()) {
                nextGreaterMap[nums2[i]] = -1;
            }
            // Otherwise, the next greater element is the top of the stack
            else {
                nextGreaterMap[nums2[i]] = st.top();
            }

            // Push the current element to the stack
            st.push(nums2[i]);
        }

        // Create a result vector to store the next greater elements for nums1
        vector<int> result(nums1.size());

        // Map the next greater elements from nums2 to nums1
        for (int i = 0; i < nums1.size(); i++) {
            result[i] = nextGreaterMap[nums1[i]];
        }

        return result;
    }
};
