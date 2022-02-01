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
    const resA = new ListNode(0, headA);
    const resB = new ListNode(0, headB);
    let lenA = getListLength(headA), lenB = getListLength(headB);
    let curA = resA, curB = resB;
    if (lenA > lenB) {
      let n = 0;
      while (n < lenA - lenB) {
        curA = curA.next;
        n++;
      }
    } else {
      let n = 0;
      while (n < lenB - lenA) {
        curB = curB.next;
        n++
      }
    }
    while (curA && curB) {
      if (curA === curB) return curA;
      curA = curA.next;
      curB = curB.next;
    }
    return null;
  };
  
  let getListLength = function(head) {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }
  