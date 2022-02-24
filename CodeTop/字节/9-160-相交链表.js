/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    if (lenA > lenB) {
        let temp = lenA - lenB;
        while (temp--) {
            headA = headA.next;
        }
    } else {
        let temp = lenB - lenA;
        while (temp--) {
            headB = headB.next;
        }
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

let getLength = function(head) {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
}