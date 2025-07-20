/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  // sort the array
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let maxFreq = 0;
  let windowSum = 0;
  let l = 0,
    r = 0;
  while (r < n) {
    windowSum += nums[r];
    // validate window and check with as a possible candidate
    while (nums[r] * (r - l + 1) - windowSum > k) {
      windowSum -= nums[l++];
    }
    maxFreq = Math.max(maxFreq, r - l + 1);
    r++;
  }

  return maxFreq;
};
