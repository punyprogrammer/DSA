/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Calculates the maximum path sum in a binary tree
 * @param {TreeNode} root - Root node of the binary tree
 * @return {number} The maximum path sum found in the tree
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    
    /**
     * Helper function to calculate maximum path sum for a subtree
     * @param {TreeNode} node - Current node being processed
     * @return {number} Maximum path sum that can be extended to the parent node
     */
    const calculateMaxPath = (node) => {
        if (!node) return 0;
        
        // Calculate max path sums from left and right subtrees (negative sums are discarded)
        const leftSum = Math.max(0, calculateMaxPath(node.left));
        const rightSum = Math.max(0, calculateMaxPath(node.right));
        
        // Update global maximum with the current node as the root of the path
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
        
        // Return the maximum path sum that can be extended to the parent
        return node.val + Math.max(leftSum, rightSum);
    };
    
    calculateMaxPath(root);
    return maxSum;
};
