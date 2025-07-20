/**
 * Definition for singly-linked list node.
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Reverses a singly linked list.
 * 
 * @param head - The head of the linked list.
 * @returns The new head of the reversed list.
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        const nextNode: ListNode | null = curr.next; // Save reference to next node
        curr.next = prev;        // Reverse the link
        prev = curr;             // Move prev forward
        curr = nextNode;         // Move curr forward
    }

    return prev; // New head of the reversed list
}

/**
 * Removes nodes from the linked list that have a greater value node on their right.
 * This is done by reversing the list, tracking the max value seen, and removing any nodes with a lesser value.
 * After processing, the list is reversed again to maintain original order.
 * 
 * For example, input: 8 → 3 → 13 → 2 → 5
 * Output: 13 → 5
 * 
 * @param head - The head of the original linked list.
 * @returns The modified list head with nodes removed as per the condition.
 */
function removeNodes(head: ListNode | null): ListNode | null {
    if (!head) return head;

    // Step 1: Reverse the list to process from end to start
    const newHead = reverseList(head);

    // Initialize the max value seen so far
    let maxCurr = newHead.val;

    // Initialize pointers for traversal
    let currNode: ListNode | null = newHead.next;
    let prevNode: ListNode = newHead;

    // Step 2: Traverse the reversed list and remove nodes that are less than max seen so far
    while (currNode) {
        if (currNode.val < maxCurr) {
            // Node has smaller value than max, remove it by skipping
            prevNode.next = currNode.next;
            currNode = currNode.next;
        } else {
            // Update max value and move pointers ahead
            maxCurr = Math.max(maxCurr, currNode.val);
            prevNode = currNode;
            currNode = currNode.next;
        }
    }

    // Step 3: Reverse the list again to restore original order
    return reverseList(newHead);
}
