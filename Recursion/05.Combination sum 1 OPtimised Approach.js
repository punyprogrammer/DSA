/**
 * Finds all unique combinations in candidates where the numbers sum to target.
 * @param {number[]} candidates - Array of candidate numbers (no duplicates)
 * @param {number} target - Target sum
 * @return {number[][]} All valid combinations
 */
function combinationSum(candidates, target) {
    const result = [];
    
    /**
     * Backtracking helper function
     * @param {number} start - Index to start from (avoids duplicate combinations)
     * @param {number} remaining - Remaining target sum
     * @param {number[]} path - Current combination path
     */
    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            result.push([...path]); // Push a copy of the current path
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip if candidate exceeds remaining target
            if (candidates[i] > remaining) continue;
            
            // Include the candidate
            path.push(candidates[i]);
            backtrack(i, remaining - candidates[i], path); // Note: reuse same index
            path.pop(); // Backtrack
        }
    }
    
    backtrack(0, target, []);
    return result;
}
