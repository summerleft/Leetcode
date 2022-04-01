class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
    }
}


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param head ListNode类 
 * @return ListNode类
 */
export function ReverseList(head: ListNode): ListNode {
    // write code here
    let pre: ListNode = null, cur: ListNode = head;
    while (cur) {
        let temp: ListNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}