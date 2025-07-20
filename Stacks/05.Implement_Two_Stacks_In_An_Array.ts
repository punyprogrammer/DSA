class TwoStacks {
  private size: number; // Size of the array
  private arr: number[]; // Array to store the stacks
  private top1: number; // Top index of the first stack
  private top2: number; // Top index of the second stack

  constructor(size: number) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1; // First stack grows from the start
    this.top2 = size; // Second stack grows from the end
  }

  // Push an element to the first stack
  push1(x: number): void {
    // Check for overflow
    if (this.top1 + 1 === this.top2) {
      console.log(`Stack Overflow! Cannot push ${x} to Stack 1.`);
      return;
    }
    this.arr[++this.top1] = x; // Increment top1 and insert the element
    console.log(`${x} pushed to Stack 1.`);
  }

  // Push an element to the second stack
  push2(x: number): void {
    // Check for overflow
    if (this.top1 + 1 === this.top2) {
      console.log(`Stack Overflow! Cannot push ${x} to Stack 2.`);
      return;
    }
    this.arr[--this.top2] = x; // Decrement top2 and insert the element
    console.log(`${x} pushed to Stack 2.`);
  }

  // Pop an element from the first stack
  pop1(): number {
    // Check for underflow
    if (this.top1 === -1) {
      console.log("Stack Underflow! Cannot pop from Stack 1.");
      return -1; // Return a sentinel value
    }
    const x = this.arr[this.top1--]; // Return the element and decrement top1
    console.log(`${x} popped from Stack 1.`);
    return x;
  }

  // Pop an element from the second stack
  pop2(): number {
    // Check for underflow
    if (this.top2 === this.size) {
      console.log("Stack Underflow! Cannot pop from Stack 2.");
      return -1; // Return a sentinel value
    }
    const x = this.arr[this.top2++]; // Return the element and increment top2
    console.log(`${x} popped from Stack 2.`);
    return x;
  }

  // Print the stacks (for debugging purposes)
  printStacks(): void {
    console.log("Stack 1:", this.arr.slice(0, this.top1 + 1).join(" "));
    console.log("Stack 2:", this.arr.slice(this.top2).reverse().join(" "));
  }
}

// Example usage
const ts = new TwoStacks(6); // Create an array of size 6 for two stacks

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
