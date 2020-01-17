/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  if (head === null || head.next === null){
    return head;
  }
  let nextVar = head.next;
  head.next = null;
  let newHead = reverseList(nextVar);
  nextVar.next = head;

  return newHead;
};