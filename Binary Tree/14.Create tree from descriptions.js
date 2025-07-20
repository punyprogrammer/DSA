var createBinaryTree = function(descriptions) {
    const nodes = new Map(); // Stores all created nodes
    const childSet = new Set(); // Tracks all child nodes
    let root = null;

    // First pass: create all nodes and track children
    for (const [parentVal, childVal, isLeft] of descriptions) {
        // Create or get parent node
        let parentNode = nodes.get(parentVal);
        if (!parentNode) {
            parentNode = new TreeNode(parentVal);
            nodes.set(parentVal, parentNode);
        }

        // Create or get child node
        let childNode = nodes.get(childVal);
        if (!childNode) {
            childNode = new TreeNode(childVal);
            nodes.set(childVal, childNode);
        }

        // Link parent and child
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }

        // Track that this is a child node
        childSet.add(childVal);
    }

    // Second pass: find the root (node that's not a child)
    for (const [val, node] of nodes) {
        if (!childSet.has(val)) {
            root = node;
            break;
        }
    }

    return root;
};
