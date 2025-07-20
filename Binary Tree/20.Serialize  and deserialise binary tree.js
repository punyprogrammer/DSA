/**
 * Encodes a tree to a single string (Level-order/BFS traversal)
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "";
    
    const queue = [root];
    const values = [];
    
    while (queue.length) {
        const node = queue.shift();
        
        if (node) {
            values.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            values.push('$');
        }
    }
    
    // Remove trailing null markers for efficiency
    while (values.length > 0 && values[values.length - 1] === '$') {
        values.pop();
    }
    
    return values.join(',');
};

/**
 * Decodes your encoded data to tree
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;
    
    const values = data.split(',');
    const root = new TreeNode(Number(values[0]));
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < values.length) {
        const node = queue.shift();
        
        // Left child
        if (i < values.length && values[i] !== '$') {
            node.left = new TreeNode(Number(values[i]));
            queue.push(node.left);
        }
        i++;
        
        // Right child
        if (i < values.length && values[i] !== '$') {
            node.right = new TreeNode(Number(values[i]));
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
};
