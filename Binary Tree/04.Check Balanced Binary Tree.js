/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Helper function to check if a binary tree is height-balanced
 * @param {TreeNode} root - The root node of the binary tree
 * @return {number} Returns the height of the tree if balanced, -1 if unbalanced
 */
function checkBalance(root) {
    // Base case: an empty tree has height 0 and is balanced
    if (root === null) return 0;
    
    // Recursively check left subtree height
    const leftHeight = checkBalance(root.left);
    // If left subtree is unbalanced, propagate -1 up
    if (leftHeight === -1) return -1;
    
    // Recursively check right subtree height
    const rightHeight = checkBalance(root.right);
    // If right subtree is unbalanced, propagate -1 up
    if (rightHeight === -1) return -1;
    
    // Check if current node's subtrees are balanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    // Return current subtree's height (1 + max child height)
    return 1 + Math.max(leftHeight, rightHeight);
}

/**
 * Main function to determine if a binary tree is height-balanced
 * @param {TreeNode} root - The root node of the binary tree
 * @return {boolean} True if the tree is balanced, false otherwise
 */
var isBalanced = function(root) {
    // A tree is balanced if checkBalance doesn't return -1
    return checkBalance(root) !== -1;
};
