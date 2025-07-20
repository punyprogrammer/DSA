var buildTree = function(preorder, inorder) {
    const inorderMap = {};
    const n = inorder.length;
    for (let i = 0; i < n; i++) {
        inorderMap[inorder[i]] = i;
    }
    
    let preorderIndex = 0; // Track position in preorder array
    
    const build = (left, right) => {
        if (left > right) return null;
        
        const rootValue = preorder[preorderIndex++];
        const root = new TreeNode(rootValue);
        
        const inorderIndex = inorderMap[rootValue];
        
        // Build left subtree first (since preorder is root->left->right)
        root.left = build(left, inorderIndex - 1);
        // Then build right subtree
        root.right = build(inorderIndex + 1, right);
        
        return root;
    };
    
    return build(0, n - 1);
};
