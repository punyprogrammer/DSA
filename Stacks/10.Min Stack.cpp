#include <stack>
#include <algorithm>
#include <optional>
#include <stdexcept>

class MinStack {
private:
    // Stack stores pairs of (value, current minimum)
    std::stack<std::pair<int, int>> st;

public:
    // Constructor (explicitly defined for clarity)
    MinStack() = default;

    // Push a value onto the stack
    void push(int val) {
        if (st.empty()) {
            st.push({val, val}); // First element, min is itself
        } else {
            int currentMin = st.top().second;
            st.push({val, std::min(val, currentMin)}); // Update current minimum
        }
    }

    // Pop the top element from the stack
    void pop() {
        if (st.empty()) {
            throw std::runtime_error("Cannot pop from an empty stack.");
        }
        st.pop();
    }

    // Get the top element of the stack
    int top() const {
        if (st.empty()) {
            throw std::runtime_error("Stack is empty. No top element.");
        }
        return st.top().first;
    }

    // Get the minimum element in the stack
    int getMin() const {
        if (st.empty()) {
            throw std::runtime_error("Stack is empty. No minimum element.");
        }
        return st.top().second;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj;
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
