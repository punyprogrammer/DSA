/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
    const inorderMap = {};
    const n = postorder.length;
    for (let i = 0; i < n; i++) {
        inorderMap[inorder[i]] = i;
    }
    
    let postOrderIndex = n-1; // Track position in postOrderIndex array
    
    const build = (left, right) => {
        if (left > right) return null;
        if(postOrderIndex === -1) return null;
        
        const rootValue = postorder[postOrderIndex--];
        const root = new TreeNode(rootValue);
        
        const inorderIndex = inorderMap[rootValue];
        
        // Build right subtree first (since preorder is root->right->left)
        root.right = build(inorderIndex + 1, right);
        // Then build left subtree
        root.left = build(left, inorderIndex - 1);
        
        return root;
    };
    
    return build(0, n - 1);
};
