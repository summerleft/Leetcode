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
  let getLinkListLength = function(head) {
    let virtualHead = new ListNode(0);
    virtualHead.next = head;
    let res = 0;
    while (virtualHead.next) {
      res++;
      virtualHead = virtualHead.next;
    }
    return res;
  }

  const Alength = getLinkListLength(headA);
  const Blength = getLinkListLength(headB);
  if (Alength > Blength) {
    let substract = Alength - Blength;
    while (substract--) {
      headA = headA.next;
    }
  } else {
    let substract = Blength - Alength;
    while (substract--) {
      headB = headB.next;
    }
  }
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }
  return null;
};