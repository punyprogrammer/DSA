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

/**
 * Replaces the nodes from position `a` to `b` in `list1` with the entire `list2`.
 * 
 * For example:
 * list1: 0 → 1 → 2 → 3 → 4 → 5
 * list2: 100 → 101 → 102
 * a = 2, b = 4
 * Result: 0 → 1 → 100 → 101 → 102 → 5
 */
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    // We need references to:
    // - The node at position (a - 1) to connect to list2
    // - The node at position (b + 1) to connect after list2
    let removeStart: ListNode = null;
    let removeEnd: ListNode = null;

    // Pointer to traverse list1
    let currNode: ListNode = list1;
    let count: number = 0;

    // Traverse list1 to locate (a - 1)-th and (b + 1)-th nodes
    while (currNode !== null) {
        if (count === a - 1) {
            removeStart = currNode; // node before the section to be removed
        } else if (count === b + 1) {
            removeEnd = currNode; // node after the section to be removed
        }
        currNode = currNode.next;
        count++;
    }

    // Traverse to the end of list2 to find its tail
    let listTail = list2;
    while (listTail.next !== null) {
        listTail = listTail.next;
    }

    // Link (a - 1)-th node to the head of list2
    removeStart.next = list2;

    // Link tail of list2 to the (b + 1)-th node
    listTail.next = removeEnd;

    // Return the modified head of list1
    return list1;
};
