/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getMaxFrequency(map) {  // Changed to return frequency count instead of char
    let maxFreq = 0;
    for (let count of map.values()) {
        maxFreq = Math.max(maxFreq, count);
    }
    return maxFreq;
}

var characterReplacement = function(s, k) {
    let maxLen = 0;
    const freqMap = new Map();
    const n = s.length;
    let maxCount = 0;  // Track max frequency separately for efficiency
    let l = 0, r = 0;
    
    while (r < n) {
        // Expand window
        const char = s[r];
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
        maxCount = Math.max(maxCount, freqMap.get(char));
        
        // Shrink window if needed
        while ((r - l + 1) - maxCount > k) {
            const leftChar = s[l];
            freqMap.set(leftChar, freqMap.get(leftChar) - 1);
            l++;
            // Note: We don't update maxCount here (optimization)
        }
        
        // Update result
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    
    return maxLen;
};
