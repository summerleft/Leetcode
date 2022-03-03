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
    const dummyHead = new ListNode(0, head);
    let left = right = dummyHead;
    while (n--) {
        right = right.next;
    }
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return dummyHead.next;
};