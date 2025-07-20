/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0]?.length;
    let [x, y] = [0, n - 1]
    let ans = false;
    while (x <= m - 1 && y >= 0) {
        // if target
        if (matrix[x][y] === target) {
            ans = true;
            break;
        }
        else {
            if (matrix[x][y] > target) {
                // this means target cannot be in the given col
                y--;
            }
            // this means target cannot be in the given row
            else if (matrix[x][y] < target) {
                x++;
            }
        }
    }
    return ans;

};
