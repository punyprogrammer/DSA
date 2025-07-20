class Solution {
  isValid(s: string): boolean {
    const stack: string[] = [];

    for (const ch of s) {
      // If it's an opening bracket, push onto the stack
      if (ch === '{' || ch === '(' || ch === '[') {
        stack.push(ch);
      }
      // If it's a closing bracket
      else {
        // If the stack is empty, it's invalid
        if (stack.length === 0) {
          return false;
        }

        const topItem = stack.pop();

        // Check if the closing bracket matches the top of the stack
        if (
          (ch === ')' && topItem !== '(') ||
          (ch === ']' && topItem !== '[') ||
          (ch === '}' && topItem !== '{')
        ) {
          return false;
        }
      }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
  }
}

// Example usage
const solution = new Solution();
console.log(solution.isValid("()[]{}")); // Output: true
console.log(solution.isValid("([)]"));   // Output: false
console.log(solution.isValid("{[]}"));   // Output: true
