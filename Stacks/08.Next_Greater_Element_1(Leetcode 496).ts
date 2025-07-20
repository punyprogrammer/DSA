function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // Create a map to store the next greater element for each element in nums2
    const nextGreaterMap: { [key: number]: number } = {};

    // Use a stack to find the next greater element for each element in nums2
    const stack: number[] = [];

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        // Pop elements from the stack that are smaller than the current element
        while (stack.length > 0 && nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
        }

        // If the stack is empty, there is no greater element to the right
        if (stack.length === 0) {
            nextGreaterMap[nums2[i]] = -1;
        }
        // Otherwise, the next greater element is the top of the stack
        else {
            nextGreaterMap[nums2[i]] = stack[stack.length - 1];
        }

        // Push the current element to the stack
        stack.push(nums2[i]);
    }

    // Create a result array to store the next greater elements for nums1
    const result: number[] = [];

    // Map the next greater elements from nums2 to nums1
    for (let i = 0; i < nums1.length; i++) {
        result.push(nextGreaterMap[nums1[i]]);
    }

    return result;
}
