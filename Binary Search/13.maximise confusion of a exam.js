var validAns = function(answerKey, k, val) {
    if (val === 0) return true; // Edge case: empty window
    
    let tCount = 0;
    let fCount = 0;
    const n = answerKey.length;
    
    // Initialize the first window
    for (let i = 0; i < val; i++) {
        if (answerKey[i] === 'T') tCount++;
        else fCount++;
    }
    
    // Check if we can make all 'T's or all 'F's
    if (fCount <= k || tCount <= k) {
        return true;
    }
    
    // Slide the window
    for (let i = val; i < n; i++) {
        // Remove the leftmost character
        if (answerKey[i - val] === 'T') tCount--;
        else fCount--;
        
        // Add the new character
        if (answerKey[i] === 'T') tCount++;
        else fCount++;
        
        // Check if we can make all 'T's or all 'F's
        if (fCount <= k || tCount <= k) {
            return true;
        }
    }
    
    return false;
};

var maxConsecutiveAnswers = function(answerKey, k) {
    let [l, r] = [0, answerKey.length];
    let ans = 0;
    
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (validAns(answerKey, k, mid)) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
    return ans;
};
