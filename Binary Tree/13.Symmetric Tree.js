
// The main idea is we traverse left and right simulatanaeousy
// For left subtree we do right,left 
// For right subtree we do left,right
// visualize it will click 
var isSymmetric = function (root) {
  function isSym(left, right) {
    if (left === null && right === null) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return isSym(left.left, right.right) && isSym(left.right, right.left);
  }
  return isSym(root, root);
};
