/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const res = new ListNode(0, head);

    let pre = res;
    while (--left) {
        pre = pre.next;
    }

    let rightNode = res;
    while (right--) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let cur = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    reverse(leftNode);

    pre.next = rightNode;
    leftNode.next = cur;

    return res.next;
    
};

let reverse = function(head) {
    let pre = null, cur = head;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
}