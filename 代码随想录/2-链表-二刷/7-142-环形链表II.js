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
  if (!head || !head.next) return null;
  let slow = head.next, fast = slow.next;
  while (fast && fast.next && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== slow) return null;
  while (head !== slow) {
    head = head.next;
    slow = slow.next;
  }
  return head;
};