/**
 * Helper function to find the row index of the maximum value in a specific column
 * @param {number[][]} mat - The 2D matrix to search
 * @param {number} colIdx - The column index to search in
 * @return {number} Row index of the maximum value in the specified column
 */
var findMaxInCol = function(mat, colIdx) {
    let maxVal = -Infinity;  // Initialize with smallest possible number
    let maxRow = 0;          // Track row index of max value
    
    // Iterate through each row in the column
    for (let row = 0; row < mat.length; row++) {
        // Update max value and row index if current element is larger
        if (mat[row][colIdx] > maxVal) {
            maxVal = mat[row][colIdx];
            maxRow = row;
        }
    }
    return maxRow;
};

/**
 * Main function to find a peak element in a 2D matrix using binary search
 * A peak is defined as an element that is greater than its adjacent neighbors
 * @param {number[][]} mat - The 2D matrix to search
 * @return {number[]} Coordinates [row, col] of a peak element
 */
var findPeakGrid = function(mat) {
    const rows = mat.length;     // Number of rows in matrix
    const cols = mat[0].length;  // Number of columns in matrix
    
    // Initialize binary search boundaries (searching columns)
    let [low, high] = [0, cols - 1];
    
    // Binary search loop
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);  // Find middle column
        
        // Find row with maximum value in current column
        const maxRow = findMaxInCol(mat, mid);
        
        // Get current element and its left/right neighbors
        const current = mat[maxRow][mid];
        const left = mid > 0 ? mat[maxRow][mid - 1] : -Infinity;  // -∞ if no left neighbor
        const right = mid < cols - 1 ? mat[maxRow][mid + 1] : -Infinity;  // -∞ if no right neighbor
        
        // Check if current element is a peak (greater than both neighbors)
        if (current > left && current > right) {
            return [maxRow, mid];  // Found peak, return coordinates
        } 
        // If left neighbor is larger, peak must be in left half
        else if (current < left) {
            high = mid - 1;
        } 
        // Otherwise peak must be in right half
        else {
            low = mid + 1;
        }
    }
    
    return [-1, -1];  // Fallback return (shouldn't reach here for valid inputs)
};
