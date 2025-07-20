/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const n = nums.length;
  let l = 0,
    r = 0;
  let maxLen = 0;
  let currOneCount = 0;
  while (r < n) {
    currOneCount += nums[r] === 1;
    // make sure window valid
    if (r - l + 1 - currOneCount > k) {
      currOneCount -= nums[l] === 1;
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};
