/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  const n = nums.length;
  let res = 1;
  let left = 0,right = 0;
  while (right < n) {
    res *= nums[right];
    while (left <= right && res >= k) {
      res = res / nums[left];
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
};
