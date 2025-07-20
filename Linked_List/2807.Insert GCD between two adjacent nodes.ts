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

// Helper to compute GCD using Euclidean algorithm
function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let curr = head;
    
    while (curr && curr.next) {
        const nextNode = curr.next;
        const divisor = gcd(curr.val, nextNode.val);

        // Insert new node with GCD between current and next
        curr.next = new ListNode(divisor, nextNode);

        // Move to next original node (after inserted one)
        curr = nextNode;
    }

    return head;
}
