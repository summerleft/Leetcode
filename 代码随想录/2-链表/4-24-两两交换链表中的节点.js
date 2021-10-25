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
  let res = new ListNode(0, head);
  let cur = res;
  while (cur.next && cur.next.next) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = cur.next.next;
    cur.next.next = temp;
    cur = temp;
  }
  return res.next;
};