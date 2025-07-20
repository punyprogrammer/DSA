// The main idea is the do reverse preorder root,right,left
// as we are processing right before left the first time we encounter a node
// in a level it will be right most node and part of the right side view
var rightSideView = function (root) {
  const rightSideViewEntries = [];
  function solve(root, level) {
    if (root === null) return;
    // this means this is the first node we are encountering in this level
    if (rightSideViewEntries.length === level) {
      rightSideViewEntries.push(root.val);
    }
    solve(root.right, level + 1);
    solve(root.left, level + 1);
  }
  solve(root, 0);
  return rightSideViewEntries;
};
