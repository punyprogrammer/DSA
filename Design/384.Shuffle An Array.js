class Solution {
  constructor(nums) {
    this.original = [...nums];  // Create a copy
    this.nums = [...nums];      // Create another copy
  }

  reset() {
    this.nums = [...this.original];  // Return a fresh copy
    return this.nums;
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm (in-place)
    for (let i = this.nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums;
  }
}
