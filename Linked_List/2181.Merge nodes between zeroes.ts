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

function mergeNodes(head: ListNode | null): ListNode | null {
    let newListHead =  null;
    let newListPointer = null;
    let curr = head;
    let currSum = 0 ;
    while(curr!==null){
        // if curr val is 0 it means have to sum 
        if(curr.val === 0 && currSum ){
        //    if first entry 
        if(!newListHead ){
            newListHead = new ListNode(currSum);
            newListPointer = newListHead;
        }
        else {
            newListPointer.next = new ListNode(currSum);
            newListPointer = newListPointer.next;
        }
        currSum = 0 ;
        }
        currSum +=curr.val;
        curr = curr.next;
    }
    return newListHead;
};
