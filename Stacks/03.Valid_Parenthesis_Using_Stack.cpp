#include <stack>
#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;

        for (char ch : s) {
            // If it's an opening bracket, push onto the stack
            if (ch == '{' || ch == '(' || ch == '[') {
                st.push(ch);
            }
            // If it's a closing bracket
            else {
                // If the stack is empty, it's invalid
                if (st.empty()) {
                    return false;
                }

                char topItem = st.top();
                st.pop();

                // Check if the closing bracket matches the top of the stack
                if ((ch == ')' && topItem != '(') ||
                    (ch == ']' && topItem != '[') ||
                    (ch == '}' && topItem != '{')) {
                    return false;
                }
            }
        }

        // If the stack is empty, all brackets are matched
        return st.empty();
    }
};
