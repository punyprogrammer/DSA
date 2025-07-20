/**
 * Finds all nodes at distance K from the target node in a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @param {TreeNode} target - Target node to measure distance from
 * @param {number} k - Distance from target
 * @return {number[]} - Values of nodes at distance K
 */
var distanceK = function (root, target, k) {
    if (k === 0) return [target.val];

    // Build parent map and find target if needed (handles target not being root)
    const parentMap = new Map();
    const buildParentMap = (node, parent) => {
        if (!node) return;
        parentMap.set(node, parent);
        buildParentMap(node.left, node);
        buildParentMap(node.right, node);
    };
    buildParentMap(root, null);

    const result = [];
    const visited = new Set();
    const queue = [[target, 0]]; // [node, currentDistance]
    visited.add(target);

    while (queue.length) {
        const [node, distance] = queue.shift();

        if (distance === k) {
            result.push(node.val);
            continue; // No need to process neighbors at distance k
        }

        // Process neighbors (left, right, parent)
        [node.left, node.right, parentMap.get(node)].forEach(neighbor => {
            if (neighbor && !visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        });
    }

    return result;
};
