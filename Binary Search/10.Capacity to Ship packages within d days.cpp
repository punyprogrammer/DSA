function isValid(weights, days, val) {
    let currSum = 0;
    let noOfDays = 1; // At least one day is needed
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > val) return false; // Single item exceeds capacity
        if (currSum + weights[i] > val) {
            noOfDays++;
            currSum = weights[i];
            if (noOfDays > days) return false; // Early exit if days exceed
        } else {
            currSum += weights[i];
        }
    }
    return noOfDays <= days;
}

var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights); // Minimum possible capacity
    let right = weights.reduce((acc, item) => acc + item, 0); // Maximum possible capacity
    let ans = right; // Initialize with the maximum possible answer
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (isValid(weights, days, mid)) {
            ans = mid;
            right = mid - 1; // Try for a smaller capacity
        } else {
            left = mid + 1; // Need a larger capacity
        }
    }
    return ans;
};
