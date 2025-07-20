/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set: Set<number> = new Set(nums);
    let currNode: ListNode | null = head;
    let prevNode: ListNode | null = null;

    // We’ll track a new head in case the original head is removed
    let newHead: ListNode | null = head;

    while (currNode) {
        if (set.has(currNode.val)) {
            // Remove node
            if (prevNode === null) {
                // Deleting the head
                newHead = currNode.next;
            } else {
                // Bypass the current node
                prevNode.next = currNode.next;
            }
            // Move to next without updating prevNode
            currNode = currNode.next;
        } else {
            // Keep node, update prevNode
            prevNode = currNode;
            currNode = currNode.next;
        }
    }

    return newHead;
}
