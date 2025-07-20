function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    // Step 1: Detect if a cycle exists
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Step 2: Find the start of the cycle
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr!.next;
                slow = slow!.next;
            }
            return ptr; // This is the node where the cycle begins
        }
    }

    return null; // No cycle
}
