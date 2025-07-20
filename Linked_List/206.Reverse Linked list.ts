/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number;
 *     next: ListNode | null;
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = val === undefined ? 0 : val;
 *         this.next = next === undefined ? null : next;
 *     }
 * }
 */

/**
 * Reverses a singly linked list.
 * @param head - The head of the linked list.
 * @returns The new head of the reversed linked list.
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prevNode: ListNode | null = null;       // Initially, previous node is null
    let currNode: ListNode | null = head;       // Start from the head of the list

    // Iterate through the list until we reach the end
    while (currNode !== null) {
        const nextNode: ListNode | null = currNode.next; // Store reference to next node
        currNode.next = prevNode;                        // Reverse the link
        prevNode = currNode;                             // Move prevNode one step forward
        currNode = nextNode;                             // Move currNode one step forward
    }

    // At the end, prevNode points to the new head of the reversed list
    return prevNode;
}
