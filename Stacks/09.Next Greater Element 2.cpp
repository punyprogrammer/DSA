#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return {}; // Handle empty input

        vector<int> result(n, -1); // Initialize result with -1
        stack<int> st;

        // Traverse the circular array twice (2 * n)
        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n; // Map the index to the original array

            // Pop elements from the stack that are smaller than the current element
            while (!st.empty() && st.top() <= nums[index]) {
                st.pop();
            }

            // If the stack is not empty, assign the next greater element
            if (!st.empty()) {
                result[index] = st.top();
            }

            // Push the current element onto the stack
            st.push(nums[index]);
        }

        return result;
    }
};
