class Stack<T> {
  private items: T[] = []; // Array to store stack elements

  // Push an element onto the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Pop an element from the stack
  pop(): T | null {
    if (this.isEmpty()) return null;
    return this.items.pop() as T;
  }

  // Peek at the top element of the stack
  peek(): T | null {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size(): number {
    return this.items.length;
  }

  // Print the stack (optional, for debugging)
  printStack(): string {
    return this.items.join(" ");
  }
}
