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
    let slow = head.next, fast = head.next.next;
    while (fast && fast.next && slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!fast || !fast.next) return null;
    let res = head;
    while (res !== slow) {
        res = res.next;
        slow = slow.next
    }
    return res;
};