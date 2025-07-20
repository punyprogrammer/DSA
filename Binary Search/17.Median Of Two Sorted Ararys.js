function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array to reduce binary search range
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);
    
    let low = 0;
    let high = m;
    
    while (low <= high) {
        const partition1 = Math.floor((low + high) / 2);
        const partition2 = totalLeft - partition1;
        
        // Handle edge cases where partitions are at the boundaries
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];
        
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];
        
        // Correct partition found
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
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
    
    throw new Error("Input arrays are not sorted or invalid");
}
