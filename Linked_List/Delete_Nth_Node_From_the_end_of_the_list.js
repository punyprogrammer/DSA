/**
 * @param {ListNode} head
 * @param {number} n
 * @return {Node | null}
 */
export default function deleteNthNodeFromEnd(head, n) {
  //  0 index ( len - n)
  let curr = head;
  let len = 0;
  while (curr) {
    len++;
    curr = curr.next;
  }
  // if len === n then delete head and return 
  if(len === n) return head.next;
  let prev = null;
  curr = head;
  for(let i = 0 ;i<(len - n);i++){
   prev = curr;
   curr = curr.next;
  }
  prev.next = curr.next;
  return head;

}
