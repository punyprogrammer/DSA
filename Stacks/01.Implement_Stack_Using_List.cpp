#include <iostream>
#include <vector>
using namespace std;

class DynamicStack {
private:
    vector<int> arr; // Dynamic array to store stack elements

public:
    // Push an element onto the stack
    void push(int value) {
        arr.push_back(value);
    }
    int pop() {
        if (isEmpty()) {
            return -1;
        }
        int value = arr.back();
        arr.pop_back();
        return value;
    }
    int peek() {
        if (isEmpty()) {
            return -1;
        }
        return arr.back();
    }
    bool isEmpty() {
        return arr.empty();
    }
};

int main() {
    DynamicStack stack;

    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.printStack(); // Output: Stack elements: 10 20 30

    cout << "Top element: " << stack.peek() << endl; // Output: Top element: 30

    stack.pop(); // Output: 30 popped from the stack.
    stack.pop(); // Output: 20 popped from the stack.

    stack.printStack(); // Output: Stack elements: 10

    stack.pop(); // Output: 10 popped from the stack.
    stack.pop(); // Output: Stack Underflow! Cannot pop. Stack is empty.

    cout << "Is stack empty? " << (stack.isEmpty() ? "Yes" : "No") << endl; // Output: Is stack empty? Yes

    return 0;
}
