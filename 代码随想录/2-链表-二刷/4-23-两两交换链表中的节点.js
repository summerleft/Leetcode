/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let res = new ListNode(0, head), temp = res;
  while (temp.next && temp.next.next) {
    pre = temp.next;
    cur = pre.next;
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = temp.next.next;
  }
  return res.next;
};