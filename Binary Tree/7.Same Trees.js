/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursively checks if two binary trees are identical in structure and values
 * @param {TreeNode} currentFirst - Current node from the first tree being compared
 * @param {TreeNode} currentSecond - Current node from the second tree being compared
 * @return {boolean} True if trees are identical, false otherwise
 */
function isIdentical(currentFirst, currentSecond) {
    // Base case: both nodes are null (reached leaf nodes)
    if (currentFirst === null && currentSecond === null) {
        return true;
    }
    
    // Structural mismatch: one node is null while the other isn't
    if ((currentFirst === null && currentSecond !== null) || 
        (currentSecond === null && currentFirst !== null)) {
        return false;
    }
    
    // Value mismatch: current nodes have different values
    if (currentFirst.val !== currentSecond.val) {
        return false;
    }
    
    // Recursively check left and right subtrees
    const areLeftSubtreesIdentical = isIdentical(currentFirst.left, currentSecond.left);
    const areRightSubtreesIdentical = isIdentical(currentFirst.right, currentSecond.right);
    
    // Current trees are identical only if both subtrees are identical
    return areLeftSubtreesIdentical && areRightSubtreesIdentical;
}

/**
 * Main function to check if two binary trees are the same
 * @param {TreeNode} p - Root node of the first tree
 * @param {TreeNode} q - Root node of the second tree
 * @return {boolean} True if trees are identical, false otherwise
 */
var isSameTree = function(p, q) {
    return isIdentical(p, q);
};
