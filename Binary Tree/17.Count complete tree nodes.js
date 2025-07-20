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
 * @return {number}
 */
var countNodes = function (root) {
  function findLeftHeight(root) {
    let count = 0;
    while(root?.left){
        count++;
        root = root.left;
    }
    return count;
  }
  function findRightHeight(root) {
    let count = 0;
    while(root?.right){
        count++;
        root = root.right;
    }
    return count;
  }
  function countNodes(root) {
    if (root === null) return 0;
    const leftHeight = findLeftHeight(root);
    const rightHeight = findRightHeight(root);
  
    if (leftHeight === rightHeight) {
      return (2 ** (leftHeight+1)) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
  return countNodes(root);
};
