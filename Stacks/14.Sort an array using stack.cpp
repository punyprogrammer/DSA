#include <bits/stdc++.h>
using namespace std;

vector<int> sortArray(vector<int> &arr) {
    stack<int> st;
    vector<int> ans;

    for (int num : arr) {
        // Pop elements from the stack and add them to the result vector
        // if they are smaller than the current element
        while (!st.empty() && num < st.top()) {
            ans.push_back(st.top());
            st.pop();
        }
        // Push the current element onto the stack
        st.push(num);
    }

    // Pop all remaining elements from the stack and add them to the result vector
    while (!st.empty()) {
        ans.push_back(st.top());
        st.pop();
    }

    // Reverse the result to get ascending order
    reverse(ans.begin(), ans.end());
    return ans;
}

int main() {
    vector<int> arr = {5, 3, 1, 4, 2};
    vector<int> sortedArr = sortArray(arr);

    for (int num : sortedArr) {
        cout << num << " ";
    }
    // Output: 1 2 3 4 5
    return 0;
}
