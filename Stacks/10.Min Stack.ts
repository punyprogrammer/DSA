class MinStack {
    private stack: [number, number][]; // Each element is a tuple [value, currentMin]

    constructor() {
        this.stack = [];
    }

    /**
     * Pushes a value onto the stack.
     * @param val - The value to push.
     */
    push(val: number): void {
        if (!this.stack.length) {
            this.stack.push([val, val]); // If the stack is empty, the value is also the current minimum
        } else {
            const currentMin = this.stack[this.stack.length - 1][1];
            this.stack.push([val, Math.min(val, currentMin)]); // Push the value and the new minimum
        }
    }

    /**
     * Removes the top element from the stack.
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * Returns the top element of the stack.
     * @returns The top element.
     */
    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * Returns the minimum value in the stack.
     * @returns The minimum value.
     */
    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}

// Usage example:
// const obj = new MinStack();
// obj.push(val);
// obj.pop();
// const topValue = obj.top();
// const minValue = obj.getMin();
