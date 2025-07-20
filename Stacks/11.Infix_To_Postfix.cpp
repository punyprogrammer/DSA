#include <bits/stdc++.h>
using namespace std;

bool isDigit(char ch) {
    return ch >= '0' && ch <= '9';
}

bool isAlpha(char ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

string infixToPostfix(string exp) {
    string ans;
    ans.reserve(exp.size()); // Preallocate memory to avoid reallocations
    unordered_map<char, int> operatorPriority = {
        {'+', 1}, // Lowest priority
        {'-', 1},
        {'*', 2},
        {'/', 2},
        {'^', 3}  // Highest priority
    };
    stack<char> st;

    for (char ch : exp) {
        if (isDigit(ch) || isAlpha(ch)) {
            ans += ch; // Add digits or letters directly to the result
        } else if (ch == '(') {
            st.push(ch); // Push opening parenthesis to the stack
        } else if (ch == ')') {
            // Pop until '(' is encountered
            while (!st.empty() && st.top() != '(') {
                ans += st.top();
                st.pop();
            }
            if (!st.empty()) {
                st.pop(); // Remove '(' from the stack
            }
        } else if (operatorPriority.count(ch)) {
            // Pop higher-priority operators from the stack
            while (!st.empty() && st.top() != '(' && operatorPriority[ch] <= operatorPriority[st.top()]) {
                ans += st.top();
                st.pop();
            }
            st.push(ch); // Push the current operator to the stack
        }
    }

    // Add remaining operators to the result
    while (!st.empty()) {
        ans += st.top();
        st.pop();
    }

    return ans;
}
