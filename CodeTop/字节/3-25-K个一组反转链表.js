/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let pre = dummy;
    let end = dummy;

    while (end.next) {
        for (let i = 0; i < k; i++) {
            end = end.next;
            if (!end) break;
        }
        if (!end) break;
        let start = pre.next;
        let next = end.next;
        end.next = null;
        pre.next = reverse(start);
        start.next = next;
        pre = start;
        end = pre
    }
    return dummy.next;
};

let reverse = function(head) {
    let pre = null, cur = head;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}