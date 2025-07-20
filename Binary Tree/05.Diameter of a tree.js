/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Helper function to calculate diameter
 * @param {TreeNode} root - Current node
 * @param {object} result - Object to store max diameter (passed by reference)
 * @return {number} Height of the current subtree
 */
function solve(root, result) {
    if (root === null) return 0;
    
    const leftHeight = solve(root.left, result);
    const rightHeight = solve(root.right, result);
    
    // Update max diameter (number of edges between farthest nodes)
    result.max = Math.max(result.max, leftHeight + rightHeight);
    
    // Return height of current subtree
    return 1 + Math.max(leftHeight, rightHeight);
}

/**
 * Calculates the diameter of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number} The diameter of the tree
 */
var diameterOfBinaryTree = function(root) {
    // Use an object to store max diameter (objects are passed by reference)
    const result = { max: 0 };
    solve(root, result);
    return result.max;
};
