/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let res = new ListNode(0, head);
  let left = right = res;
  while (n !== 0) {
    right = right.next;
    n--;
  }
  while (right) {
    if (!right.next) {
      left.next = left.next.next;
      break;
    }
    right = right.next;
    left = left.next;
  }
  return res.next
};