var widthOfBinaryTree = function (root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [[root, 0]]; // Use array as queue with [node, index]

    while (queue.length) {
        const levelSize = queue.length;
        const levelMin = queue[0][1]; // First element's index is level's minimum

        let firstIndex, lastIndex;

        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();
            const normalizedIndex = index - levelMin; // Prevent overflow

            // Track first and last nodes in level
            if (i === 0) firstIndex = normalizedIndex;
            if (i === levelSize - 1) lastIndex = normalizedIndex;

            // Enqueue children with proper indexing
            if (node.left) queue.push([node.left, 2 * normalizedIndex + 1]);
            if (node.right) queue.push([node.right, 2 * normalizedIndex + 2]);
        }

        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);
    }

    return maxWidth;
};
