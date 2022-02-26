/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null: next);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
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

const input = [[1,4,5],[1,3,4],[2,6]];
const lists = [];
for (let i = 0; i < input.length; i++) {
    let temp = new ListNode(input[i][0], null);
    let tempHead = temp;
    for (let j = 1; j < input[i].length; j++) {
        temp.next = new ListNode(input[i][j], null);
        temp = temp.next;
    }
    lists.push(tempHead);
}

console.log(mergeKLists(lists));