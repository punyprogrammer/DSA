/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var reverseOddLevels = function(root) {
      function dfs(left, right, level) {
        if (!left || !right) return;
        
        if (level % 2 === 1) {
            // Swap values at odd levels
            const temp = left.val;
            left.val = right.val;
            right.val = temp;
        }
        
        // Recurse for children
        dfs(left.left, right.right, level + 1);
        dfs(left.right, right.left, level + 1);
    }
    
    if (root) dfs(root.left, root.right, 1);
    return root;
};
