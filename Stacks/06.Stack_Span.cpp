// Given an array ’prices’ which denotes stock prices for ’n’ days, e.g.,
// 'prices[ i ]' = price of the stock at ‘ith’ day, Find the stock's span for each day.
// The span of the stock's price today is defined as the maximum number of consecutive days(starting from today and going backward) 
// for which the price of the stock was less than today's price.
// Example:
// Input: ‘n’ = 7,  ‘prices’ = [100, 80, 60, 70, 60, 75, 85]

// Output: [1, 1, 1, 2, 1, 4, 6]
// We have to find the index of the previous greater element using stack.


#include <bits/stdc++.h>
using namespace std;

vector<int> findStockSpans(vector<int>& prices) {
    int n = prices.size();
    if (n == 0) return {}; // Handle empty input

    stack<int> st; // Stack to store indices of prices
    vector<int> res(n, 1); // Result vector initialized to 1

    // Push the first index to the stack
    st.push(0);

    for (int i = 1; i < n; i++) {
        // Pop elements from the stack while the current price is greater than or equal to the price at the index stored in the stack
        while (!st.empty() && prices[i] > prices[st.top()]) {
            st.pop();
        }

        // If the stack is empty, the current price is the highest so far
        if (st.empty()) {
            res[i] = i + 1;
        }
        // Otherwise, calculate the span as the difference between the current index and the index of the previous higher price
        else {
            res[i] = i - st.top();
        }

        // Push the current index to the stack
        st.push(i);
    }

    return res;
}
