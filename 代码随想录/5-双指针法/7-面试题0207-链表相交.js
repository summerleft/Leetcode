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
    if (!headA || !headB) return null;
    if (getEnd(headA) !== getEnd(headB)) return null;
    let lenA = getLength(headA), lenB = getLength(headB)
    let substract = lenA >= lenB ? (lenA - lenB) : (lenB - lenA);
    if (lenA < lenB) {
        while (substract > 0) {
            headB = headB.next;
            substract--;
        }
        while (true) {
            if (headA === headB) {
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }
    } else {
        while (substract > 0) {
            headA = headA.next;
            substract--;
        }
        while (true) {
            if (headA === headB) {
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }
    }
};

let getLength = function(head) {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}

let getEnd = function(head) {
    while (head.next) {
        head = head.next;
    }
    return head
}