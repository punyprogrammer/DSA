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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // Do level order traversal
  if (root === null) return [];
  const bfsQueue = [];
  const result = [];
  let isLeftToRight = true;

  bfsQueue.push(root);
  while (bfsQueue.length) {
    const nodesInCurrentLevel = bfsQueue.length;
    const currentLevelEntries = Array(nodesInCurrentLevel).fill(null);
    for (let i = 0; i < nodesInCurrentLevel; i++) {
      const currentNode = bfsQueue.shift();
      if (isLeftToRight) currentLevelEntries[i] = currentNode.val;
      else currentLevelEntries[nodesInCurrentLevel - i - 1] = currentNode.val;
      if (currentNode.left) bfsQueue.push(currentNode.left);
      if (currentNode.right) bfsQueue.push(currentNode.right);
    }
    result.push(currentLevelEntries);
    isLeftToRight = !isLeftToRight;
  }
  return result;
};
