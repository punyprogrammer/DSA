class Solution {
  isValid(s) {
    const stack = [];

    for (let ch of s) {
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

