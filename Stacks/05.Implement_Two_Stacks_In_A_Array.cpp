#include <iostream>
using namespace std;

class TwoStacks {
private:
    int size; // Size of the array
    int* arr; // Array to store the stacks
    int top1; // Top index of the first stack
    int top2; // Top index of the second stack

public:
    // Constructor to initialize the array and stack tops
    TwoStacks(int n) {
        size = n;
        arr = new int[size];
        top1 = -1; // First stack grows from the start
        top2 = size; // Second stack grows from the end
    }

    // Push an element to the first stack
    void push1(int x) {
        // Check for overflow
        if (top1 + 1 == top2) {
            cout << "Stack Overflow! Cannot push " << x << " to Stack 1." << endl;
            return;
        }
        arr[++top1] = x; // Increment top1 and insert the element
        cout << x << " pushed to Stack 1." << endl;
    }

    // Push an element to the second stack
    void push2(int x) {
        // Check for overflow
        if (top1 + 1 == top2) {
            cout << "Stack Overflow! Cannot push " << x << " to Stack 2." << endl;
            return;
        }
        arr[--top2] = x; // Decrement top2 and insert the element
        cout << x << " pushed to Stack 2." << endl;
    }

    // Pop an element from the first stack
    int pop1() {
        // Check for underflow
        if (top1 == -1) {
            cout << "Stack Underflow! Cannot pop from Stack 1." << endl;
            return -1; // Return a sentinel value
        }
        int x = arr[top1--]; // Return the element and decrement top1
        cout << x << " popped from Stack 1." << endl;
        return x;
    }

    // Pop an element from the second stack
    int pop2() {
        // Check for underflow
        if (top2 == size) {
            cout << "Stack Underflow! Cannot pop from Stack 2." << endl;
            return -1; // Return a sentinel value
        }
        int x = arr[top2++]; // Return the element and increment top2
        cout << x << " popped from Stack 2." << endl;
        return x;
    }

    // Print the stacks (for debugging purposes)
    void printStacks() {
        cout << "Stack 1: ";
        for (int i = 0; i <= top1; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;

        cout << "Stack 2: ";
        for (int i = size - 1; i >= top2; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    // Destructor to free the dynamically allocated array
    ~TwoStacks() {
        delete[] arr;
    }
};

int main() {
    TwoStacks ts(6); // Create an array of size 6 for two stacks

    ts.push1(10); // Push 10 to Stack 1
    ts.push2(20); // Push 20 to Stack 2
    ts.push1(30); // Push 30 to Stack 1
    ts.push2(40); // Push 40 to Stack 2
    ts.push1(50); // Push 50 to Stack 1
    ts.push2(60); // Push 60 to Stack 2

    ts.printStacks(); // Print both stacks

    ts.pop1(); // Pop from Stack 1
    ts.pop2(); // Pop from Stack 2

    ts.printStacks(); // Print both stacks after popping

    return 0;
}
