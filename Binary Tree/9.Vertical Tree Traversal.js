
var verticalTraversal = function (root) {
  // Do inorder traversal
  const resultMap = {};
  const resultArray = [];
  function solve(root, x, y) {
    if (root === null) return;
    // map the root with the given x index
    if (!resultMap[x]) {
      resultMap[x] = [{ val: root.val, yAxis: y }];
    } else {
      resultMap[x].push({ val: root.val, yAxis: y });
    }
    // do left and right
    solve(root.left, x - 1, y + 1);
    solve(root.right, x + 1, y + 1);
  }
  solve(root, 0, 0);
  //process the nodes in order of x axis
  for (let xAxis of Object.keys(resultMap).sort((a, b) => a - b)) {
    resultArray.push(
      resultMap[xAxis]
        ?.toSorted((a, b) => {
          if (a.yAxis === b.yAxis) {
            return a.val - b.val;
          }
          return a.yAxis - b.yAxis;
        })
        .map((item) => item.val)
    );
  }
  return resultArray;
};
