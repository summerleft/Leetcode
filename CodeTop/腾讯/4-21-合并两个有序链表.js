/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = new ListNode(0, null);
    let res = head;
    while (list1 || list2) {
        if (!list1) {
            head.next = list2;
            break;
        }
        else if (!list2) {
            head.next = list1;
            break;
        }
        else if (list1.val <= list2.val) {
            head.next = list1;
            head = head.next;
            list1 = list1.next;
        } 
        else {
            head.next = list2;
            head = head.next;
            list2 = list2.next;
        } 
    }
    return res.next;
};