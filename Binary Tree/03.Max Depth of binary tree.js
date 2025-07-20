/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursive helper function to calculate the maximum depth of a binary tree
 * @param {TreeNode} root - The root node of the binary tree
 * @return {number} The maximum depth of the tree
 */
function calculateMaxDepth(root) {
    // Base case: if node is null, its depth is 0
    if (root === null) return 0;
    
    // Recursively calculate the depth of the left subtree
    const leftDepth = calculateMaxDepth(root.left);
    
    // Recursively calculate the depth of the right subtree
    const rightDepth = calculateMaxDepth(root.right);
    
    // The depth of current node is 1 (for itself) plus 
    // the maximum depth of its subtrees
    return 1 + Math.max(leftDepth, rightDepth);
}

/**
 * Main function to find the maximum depth of a binary tree
 * @param {TreeNode} root - The root node of the binary tree
 * @return {number} The maximum depth of the tree
 */
var maxDepth = function(root) {
    // The maximum depth of a binary tree is defined as:
    // - 0 for an empty tree (null root)
    // - 1 + maximum depth between left and right subtrees for non-empty trees
    // We use a recursive approach to break down the problem into smaller subproblems
    return calculateMaxDepth(root);
};
