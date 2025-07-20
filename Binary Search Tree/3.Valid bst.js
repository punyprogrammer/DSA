var isValidBST = function(root) {
    function validate(node, min, max) {
        if (!node) return true;
        
        // Check if current node's value is within bounds
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        
        // Recursively check left and right subtrees with updated bounds
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    
    return validate(root, null, null);
};
