/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function solve(
  candidates,
  target,
  index,
  size,
  currentCombination,
  validCombinations
) {
  if (target === 0) {
    validCombinations.push([...currentCombination]);
    return;
  }
  if (index === size) {
    return;
  }
  //   1.TAKE ,as we can repeatedly pick element dont increment
  if (target - candidates[index] >= 0) {
    currentCombination.push(candidates[index]);
    solve(
      candidates,
      target - candidates[index],
      index,
      size,
      currentCombination,
      validCombinations
    );
    currentCombination.pop();
  }
  //  2.Dont take the element
  solve(
    candidates,
    target,
    index + 1,
    size,
    currentCombination,
    validCombinations
  );
}
var combinationSum = function (candidates, target) {
  const n = candidates.length;
  const currentCombination = [];
  const validCombinations = [];
  solve(candidates, target, 0, n, currentCombination, validCombinations);
  return validCombinations;
};
