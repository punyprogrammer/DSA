#include <algorithm>
#include <stack>
#include <string>
using namespace std;

class Solution {
public:
    string removeKdigits(string nums, int k) {
        if (k >= nums.size())
            return "0"; // If all digits are to be removed, return "0"

        stack<char> st;
        for (char ch : nums) {
            // Remove digits from the stack while the current digit is smaller
            // than the top of the stack
            while (!st.empty() && k > 0 && ch < st.top()) {
                st.pop();
                k--;
            }
            st.push(ch);
        }

        // If there are still digits to remove, remove them from the end
        while (k > 0 && !st.empty()) {
            st.pop();
            k--;
        }

        // Build the result string from the stack
        string res;
        while (!st.empty()) {
            res += st.top();
            st.pop();
        }
        reverse(res.begin(), res.end()); // Reverse to get the correct order

        // Remove leading zeroes
        int nonZeroIndex = 0;
        while (nonZeroIndex < res.size() && res[nonZeroIndex] == '0') {
            nonZeroIndex++;
        }

        // If all digits are zero, return "0"
        if (nonZeroIndex == res.size()) {
            return "0";
        }

        // Return the substring without leading zeroes
        return res.substr(nonZeroIndex);
    }
};
