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
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let pre = null, cur = head;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};

// 递归
var reverseList = function(head) {
    return reverse(null, head);
}

let reverse = function(pre, cur) {
    if (!cur) return pre;
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    return reverse(pre, temp);
}