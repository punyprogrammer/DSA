/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let i = 0;
    let j = 0;
    let maxLen = 0;
    const charCount = new Map(); // Using Map instead of unordered_map
    
    while (j < n) {
        // Increment count for current character
        charCount.set(s[j], (charCount.get(s[j]) || 0) + 1);
        
        // Check for validity (duplicate found)
        if (charCount.get(s[j]) > 1) {
            // Shrink window from left until valid again
            while (charCount.get(s[j]) > 1) {
                charCount.set(s[i], charCount.get(s[i]) - 1);
                i++;
            }
        }
        
        // Update maximum length
        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }
    
    return maxLen;
};
