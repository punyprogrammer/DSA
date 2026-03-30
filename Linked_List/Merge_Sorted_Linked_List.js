/**
 * @param {ListNode | null} listA
 * @param {ListNode | null} listB
 * @return {ListNode | null}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
export default function linkedListCombineTwoSorted(listA, listB) {
  let currA = listA;
  let currB = listB;
  let dummy = new ListNode(0);
  let currNew = dummy;
  while(currA &&  currB){
    if(currA.val >= currB.val){
      currNew.next = currB;
      currB = currB.next
    }
    else{
      currNew.next = currA;
      currA = currA.next;

    }
    currNew = currNew.next
  };
  // if currA exist
  if(currA) {
    currNew.next = currA;
  }
  if(currB){
    currNew.next = currB;
  }
  return dummy.next;
}
