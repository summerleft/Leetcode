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
 * @param m int整型 
 * @param n int整型 
 * @return ListNode类
 */
 export function reverseBetween(head: ListNode, m: number, n: number): ListNode {
    // write code here
    function reverse(head: ListNode): void {
        let pre: ListNode = null, cur: ListNode = head;
        while (cur) {
            let temp: ListNode = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
    }
    
    const res: ListNode = new ListNode(0, head);
    let pre: ListNode = res;
    while (--m) {
        pre = pre.next;
    }
    let rightNode: ListNode = res;
    while (n--) {
        rightNode = rightNode.next;
    }
    
    let leftNode: ListNode = pre.next;
    let cur: ListNode = rightNode.next;
    
    pre.next = null;
    rightNode.next = null;
    
    reverse(leftNode);
    
    pre.next = rightNode;
    leftNode.next = cur;
    
    return res.next;
}