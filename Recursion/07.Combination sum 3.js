/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum2(candidates, target, k) {
  candidates.sort((a, b) => a - b);
  const result = [];

  function backtrack(index, remaining, path) {
    if (path.length === k) {
      if (remaining === 0) {
        result.push([...path]);
      }
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      // Skip duplicates (after first occurrence)
      if (i > index && candidates[i] === candidates[i - 1]) continue;

      // Early termination if candidate too large
      if (candidates[i] > remaining) break;

      path.push(candidates[i]);
      backtrack(i + 1, remaining - candidates[i], path);
      path.pop();
    }
  }

  backtrack(0, target, []);
  return result;
}
var combinationSum3 = function (k, n) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return combinationSum2(arr, n, k);
};
