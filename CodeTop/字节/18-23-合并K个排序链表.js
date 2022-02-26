/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 遍历
var mergeKLists = function(lists) {
    let res = new ListNode(0, null);
    let dummyHead = res;
    while (lists.some((item) => item)) {
        let minNumber = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        lists.forEach((item, index) => {
            if (item && item.val < minNumber) {
                minNumber = item.val;
                minIndex = index;
            }
        })
        res.next = new ListNode(minNumber, null);
        res = res.next;
        lists[minIndex] = lists[minIndex] ? lists[minIndex].next : null;
    }
    return dummyHead.next;
};

// 优先队列