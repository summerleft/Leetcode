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
 var detectCycle = function(head) {
  let fast = slow = head;
  if (!fast) return null;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let p1 = head; p2 = fast;
      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};