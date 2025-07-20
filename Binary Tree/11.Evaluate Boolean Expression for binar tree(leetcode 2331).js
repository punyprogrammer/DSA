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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  function solve(root) {
    if (root.left === null && root.right === null) {
      return root.val;
    }
    // evaluation of left
    const leftEvaluation = solve(root.left);
    const rightEvaluation = solve(root.right);
    const evaluationWithNode =
      root.val === 2
        ? leftEvaluation || rightEvaluation
        : leftEvaluation && rightEvaluation;
    return evaluationWithNode;
  }
  return solve(root);
};
