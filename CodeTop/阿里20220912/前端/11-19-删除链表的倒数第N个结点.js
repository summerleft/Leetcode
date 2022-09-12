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
    let pre = dummyHead, fast = head;
    while (n--) {
        fast = fast.next;
    }
    while (fast) {
        pre = pre.next;
        fast = fast.next;
    }
    pre.next = pre.next.next;
    return dummyHead.next;
};