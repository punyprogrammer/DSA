var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;  // LCA is in the left subtree
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;  // LCA is in the right subtree
        } else {
            return root;  // Current node is the LCA
        }
    }
    return null;  // Should never reach here if p and q exist in the tree
};
