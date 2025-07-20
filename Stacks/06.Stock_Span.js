function findStockSpans(prices) {
    const n = prices.length;
    if (n === 0) return []; // Handle empty input

    const res = new Array(n).fill(1); // Result array initialized to 1
    const stack = []; // Stack to store indices of prices

    for (let i = 0; i < n; i++) {
        // Pop elements from the stack while the current price is greater than the price at the index stored in the stack
        while (stack.length > 0 && prices[i] >= prices[stack[stack.length - 1]]) {
            stack.pop();
        }

        // If the stack is empty, the current price is the highest so far
        if (stack.length === 0) {
            res[i] = i + 1;
        }
        // Otherwise, calculate the span as the difference between the current index and the index of the previous higher price
        else {
            res[i] = i - stack[stack.length - 1];
        }

        // Push the current index to the stack
        stack.push(i);
    }

    return res;
}

module.exports.findStockSpans = findStockSpans;
