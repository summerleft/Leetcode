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
// 双指针
// var reverseList = function(head) {
//   if (!head || !head.next) return head;
//   let pre = null, temp = null;
//   let cur = head;
//   while (cur) {
//     temp = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = temp;
//   }
//   return pre;
// }; 

// 递归
let reverse = function(pre, head) {
  if (!head) return pre;
  let temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
}

var reverseList = function(head) {
  return reverse(null, head)
}; 