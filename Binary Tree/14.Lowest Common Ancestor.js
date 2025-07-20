var lowestCommonAncestor = function (root, p, q) {
  // Helper function to recursively find LCA
  function getLCA(node, p, q) {
    // Base case: if node is null, return null
    if (node === null) return null;

    // If current node is either p or q, return the node
    if (node.val === p.val || node.val === q.val) return node;

    // Recursively search in left and right subtrees
    const leftResult = getLCA(node.left, p, q);
    const rightResult = getLCA(node.right, p, q);

    // If both left and right subtrees return non-null results,
    // current node is the LCA (p and q are in different subtrees)
    if (leftResult && rightResult) return node;

    // If one subtree returns null, return the other subtree's result
    // (both p and q are in the same subtree)
    if (leftResult === null) return rightResult;
    if (rightResult === null) return leftResult;
  }

  // Start the search from the root node
  return getLCA(root, p, q);
};
