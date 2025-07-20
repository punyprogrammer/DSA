/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function solve(nums, index, currSubset, resultsArray) {
  const size = nums.length;
  // base case of recursion
  resultsArray.push([...currSubset]);

  for (let i = index; i < size; i++) {
    // ignore duplicate as we have already explored solutions
    if (i > index && nums[i] === nums[i - 1]) continue;
    currSubset.push(nums[i]);
    solve(nums, i + 1, currSubset, resultsArray);
    currSubset.pop();
  }
}
var subsetsWithDup = function (nums) {
  const resultsArray = [];
  nums.sort((a,b)=>a-b);
  solve(nums, 0, [], resultsArray);
  
  return resultsArray;
};
