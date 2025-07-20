/**
 * Searches for a target value in a 2D matrix using binary search.
 * The matrix must be sorted row-wise with each row's last element < next row's first element.
 * 
 * @param {number[][]} matrix - A 2D array where each row and column is sorted in ascending order
 * @param {number} target - The value to search for
 * @return {boolean} - True if target exists, false otherwise
 */
function searchMatrix(matrix, target) {
    // Edge case: empty matrix
    if (!matrix.length || !matrix[0].length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;  // Early exit if found
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}
