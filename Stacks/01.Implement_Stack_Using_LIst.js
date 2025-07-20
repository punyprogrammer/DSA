class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack (optional, for debugging)
  printStack() {
    return this.items.join(" ");
  }
}
