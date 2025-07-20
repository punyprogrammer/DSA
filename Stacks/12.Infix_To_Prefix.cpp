#include <bits/stdc++.h>
using namespace std;

bool isDigit(char ch) {
    return ch >= '0' && ch <= '9';
}

bool isAlpha(char ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

string infixToPrefix(string exp) {
    // Reverse the input string
    reverse(exp.begin(), exp.end());

    string ans;
    map<char, int> operatorPriority = {
        {'+', 1}, // Lowest priority
        {'-', 1},
        {'*', 2},
        {'/', 2},
        {'^', 3}  // Highest priority
    };
    stack<char> st;
    int n = exp.size();

    for (int i = 0; i < n; i++) {
        // If character is a digit or letter, add it to the result
        if (isDigit(exp[i]) || isAlpha(exp[i])) {
            ans += exp[i];
        }
        // If closing bracket (originally opening bracket), push it to the stack
        else if (exp[i] == ')') { // Changed '(' to ')'
            st.push(exp[i]);
        }
        // If operator
        else if (operatorPriority.find(exp[i]) != operatorPriority.end()) {
            // Pop higher-priority operators from the stack
            while (!st.empty() && st.top() != ')' && operatorPriority.find(st.top()) != operatorPriority.end() && operatorPriority[exp[i]] < operatorPriority[st.top()]) { // Changed <= to <
                ans += st.top();
                st.pop();
            }
            st.push(exp[i]);
        }
        // If opening bracket (originally closing bracket), pop until ')' is encountered
        else if (exp[i] == '(') { // Changed ')' to '('
            while (!st.empty() && st.top() != ')') {
                ans += st.top();
                st.pop();
            }
            if (!st.empty()) {
                st.pop(); // Remove ')' from the stack
            }
        }
    }

    // Add remaining operators to the result
    while (!st.empty()) {
        ans += st.top();
        st.pop();
    }

    // Reverse the result to get the prefix expression
    reverse(ans.begin(), ans.end());
    return ans;
}

int main() {
    string exp = "(a+b)*c-d+f";
    string prefix = infixToPrefix(exp);
    cout << "Prefix expression: " << prefix << endl;
    return 0;
}
