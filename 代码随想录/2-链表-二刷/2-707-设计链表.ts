// export interface INode {
//   val: number;
//   next: INode | null;
// }

// class ListNode implements INode {
//   public val: number;
//   public next: ListNode | null;
//   constructor(val: number, next: ListNode | null = null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next);
//   }
// }

// class MyLinkedList {
//   public head: ListNode | null;
//   public length: number;
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   get(index: number): number {
//     if (index < 0 || index > this.length - 1) return -1;
//     let res = this.head as ListNode;
//     if (index === 0) return res.val;
//     let _index: number = 0;
//     while (_index < index) {
//       res = res.next;
//       _index++;
//     }
//     return res.val;
//   }

//   addAtHead(val: number): void {
//     if (this.head) {
//       this.length++;
//       this.head = new ListNode(val, this.head);
//       return;
//     }
//     this.length++;
//     this.head = new ListNode(val, null);
//   }

//   addAtTail(val: number): void {
//     let res = this.head as ListNode;
//     if (res === null) {
//       this.length++;
//       this.head = new ListNode(val, null);
//       return;
//     }
//     while (res.next) {
//       res = res.next;
//     }
//     this.length++;
//     res.next = new ListNode(val, null);
//   }

//   addAtIndex(index: number, val: number): void {
//     if (index > this.length) return;
//     if (index === this.length) return this.addAtTail(val);
//     if (index < 0) return this.addAtHead(val);
//     let res = this.head as ListNode;
//     let _index = 0;
//     while (_index < index - 1) {
//       res = res.next as INode;
//       _index++;
//     }
//     this.length++;
//     res.next = new ListNode(val, res.next);
//   }

//   deleteAtIndex(index: number): void {
//     if (index < 0 || index > this.length - 1) return;
//     let res = this.head as ListNode;
//     let _index = 0;
//     while (_index < index - 1) {
//       res = res.next as INode;
//       _index++;
//     }
//     this.length--;
//     res.next = res.next.next;
//   }
// }

export interface INode<T> {
  element: T;
  next: INode<T> | null;
}
class Node<T> implements INode<T > {
  public element: T;
  public next: INode<T> | null = null;
  constructor(element:T, next:INode<T> | null = null){
    this.element = element;
    this.next = next;
  }
}

class MyLinkedList<T> {
  public head: INode<T> | null;
  public length: number;
  constructor(){
    this.head = null;
    // length属性做边界判断
    this.length = 0;
  }
  addAtHead(element: T){
    if(this.head) {
      this.length++;
      this.head = new Node(element, this.head);
      return;
    }
    this.length++;
    this.head = new Node(element,null)
  }
  addAtTail(element: T){
    let _node = this.head as INode<T>;
    if(_node === null) {
      this.length++;
      this.head = new Node(element, null)
      return;
    }
    while(_node.next) {
      _node = _node?.next;
    }
    this.length++;
    _node.next = new Node(element, null);
  }
  addAtIndex(index: number, element: T){
    if(index <= 0) {
      return this.addAtHead(element);
    }
    if(index > this.length -1) {
      return this.addAtTail(element);
    }
    let _node = this.head as INode<T>;
    let _index = 0;
    while(_index < index -1) {
      _node = _node.next as INode<T>;
      _index++;
    }
    this.length++;
    _node.next = new Node(element, _node.next);
  }
  deleteAtIndex(index: number){ 
    let  _node = this.head as INode<T>;
    if(index > this.length -1 || index < 0 || this.length === 0 ) {
      return;
    }
    if(index === 0) {
      this.head = _node.next;
      this.length --;
      return;
    }
    let _index = 0;
    while(_index < index -1) {
      _node = _node.next as INode<T>;
      _index++;
    }
    _node.next = _node.next ? _node.next.next : null;
    this.length--;
  }
  get(index: number): T | -1{
    if(index < 0 || index > this.length - 1) {
      return -1;
    }
    let _node = this.head as INode<T>;
    if(index === 0) {
      return _node.element;
    } 
    let _index = 0;
    while(_index < index) {
      _node = _node.next as INode<T>;
      _index++;
    } 
    return _node.element;
  }
}



let obj = new MyLinkedList()
obj.addAtHead(1);
console.log(obj);
