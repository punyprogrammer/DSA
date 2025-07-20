// // Definition for singly-linked list.
// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

// Example: 4 -> 5 -> 1 -> 9
// If `node` points to 5, after calling deleteNode(node), the list becomes: 4 -> 1 -> 9

/**
 * Deletes the given node in a singly linked list.
 * Note: The node to be deleted is guaranteed not to be the tail.
 * Since we only have access to the node itself (not its previous),
 * we copy the next node’s value and bypass the next node.
 */
function deleteNode(node: ListNode | null): void {
    // Guard clause: if node is null or it's the tail (no next node), do nothing
    if (!node || !node.next) return;

    let currNode = node;
    let nextNode = currNode.next;

    // Overwrite the current node’s value with the next node’s value
    currNode.val = nextNode.val;

    // Bypass the next node, effectively deleting it from the list
    currNode.next = nextNode.next;
}
