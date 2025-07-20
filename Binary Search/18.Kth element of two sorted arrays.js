function findKthElement(nums1: number[], nums2: number[], k: number): number {
    // Ensure nums1 is the smaller array to reduce binary search range
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    
    let low = Math.max(0, k - n); // Minimum elements we need from nums1
    let high = Math.min(k, m);    // Maximum elements we can take from nums1
    
    while (low <= high) {
        const partition1 = Math.floor((low + high) / 2);
        const partition2 = k - partition1;
        
        // Handle edge cases where partitions are at the boundaries
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];
        
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];
        
        // Correct partition found
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            return Math.max(maxLeft1, maxLeft2);
        } 
        // Too far right in nums1, need to move left
        else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } 
        // Too far left in nums1, need to move right
        else {
            low = partition1 + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted or invalid k");
}

// Example usage:
// const nums1 = [1, 3, 5, 7];
// const nums2 = [2, 4, 6, 8];
// console.log(findKthElement(nums1, nums2, 5)); // Output: 5 (6th element would be index 5)
