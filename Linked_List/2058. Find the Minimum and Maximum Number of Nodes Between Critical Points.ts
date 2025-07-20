function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    const noResult: number[] = [-1, -1];
    if (!head || !head.next || !head.next.next) return noResult;

    let index = 1; // Start from second node (index = 1)
    let firstIndex = -1;
    let prevIndex = -1;
    let minDistance = Infinity;
    let maxDistance = -Infinity;

    let prev = head;
    let curr = head.next;
    let next = curr.next;

    while (next) {
        const isCritical =
            (curr.val > prev.val && curr.val > next.val) ||
            (curr.val < prev.val && curr.val < next.val);

        if (isCritical) {
            if (firstIndex === -1) {
                // First critical point
                firstIndex = index;
                prevIndex = index;
            } else {
                // Update min and max distances
                minDistance = Math.min(minDistance, index - prevIndex);
                maxDistance = index - firstIndex;
                prevIndex = index;
            }
        }

        // Move forward
        prev = curr;
        curr = next;
        next = next.next;
        index++;
    }

    return minDistance === Infinity ? noResult : [minDistance, maxDistance];
}
