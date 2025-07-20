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

function middleNode(head: ListNode | null): ListNode | null {
    let slow:ListNode = head;
    let fast:ListNode = head;
    // Caters for both odd length and even length
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
