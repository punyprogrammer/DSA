function isDigit(ch: string): boolean {
    return ch >= '0' && ch <= '9';
}

function isAlpha(ch: string): boolean {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

function infixToPostfix(exp: string): string {
    let ans: string = '';
    const operatorPriority: { [key: string]: number } = {
        '+': 1, // Lowest priority
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3, // Highest priority
    };
    const st: string[] = []; // Stack to hold operators and parentheses

    for (let i = 0; i < exp.length; i++) {
        const ch = exp[i];

        // If character is a digit or letter, add it to the result
        if (isDigit(ch) || isAlpha(ch)) {
            ans += ch;
        }
        // If opening bracket, push it to the stack
        else if (ch === '(') {
            st.push(ch);
        }
        // If closing bracket, pop until '(' is encountered
        else if (ch === ')') {
            while (st.length > 0 && st[st.length - 1] !== '(') {
                ans += st.pop();
            }
            if (st.length > 0) {
                st.pop(); // Remove '(' from the stack
            }
        }
        // If operator
        else if (operatorPriority.hasOwnProperty(ch)) {
            // Pop higher-priority operators from the stack
            while (
                st.length > 0 &&
                st[st.length - 1] !== '(' &&
                operatorPriority[ch] <= operatorPriority[st[st.length - 1]]
            ) {
                ans += st.pop();
            }
            st.push(ch); // Push the current operator to the stack
        }
    }

    // Add remaining operators to the result
    while (st.length > 0) {
        ans += st.pop();
    }

    return ans;
}

// Example usage
const exp = "a+b*(c^d-e)^(f+g*h)-i";
const postfix = infixToPostfix(exp);
console.log("Postfix expression:", postfix);
