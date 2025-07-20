/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const n = nums.length;
  let l = 0,
    r = 0;
  let maxLen = 0;
  let currOneCount = 0;
  while (r < n) {
    currOneCount += nums[r] === 1;
    // make sure window valid
    if (r - l + 1 - currOneCount > 1) {
      currOneCount -= nums[l] === 1;
      l++;
    }
    maxLen = Math.max(maxLen, r - l );
    r++;
  }
  return maxLen;
};
