#include <iostream>
#include <stack> // Include the stack library
using namespace std;

int main() {
    // Create a stack of integers
    stack<int> myStack;

    // Push elements onto the stack
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    // Print the top element of the stack
    cout << "Top element: " << myStack.top() << endl; // Output: 30

    // Pop elements from the stack
    cout << "Popped element: " << myStack.top() << endl; // Output: 30
    myStack.pop(); // Remove the top element

    cout << "Popped element: " << myStack.top() << endl; // Output: 20
    myStack.pop(); // Remove the top element

    // Check if the stack is empty
    if (myStack.empty()) {
        cout << "Stack is empty." << endl;
    } else {
        cout << "Stack is not empty." << endl; // Output: Stack is not empty.
    }

    // Print the top element again
    cout << "Top element: " << myStack.top() << endl; // Output: 10

    // Pop the last element
    myStack.pop();

    // Check if the stack is empty again
    if (myStack.empty()) {
        cout << "Stack is empty." << endl; // Output: Stack is empty.
    } else {
        cout << "Stack is not empty." << endl;
    }

    return 0;
}
