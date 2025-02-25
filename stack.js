/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (!this.top) {
      throw new Error("Pop from empty stack");
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the top node in the stack. */
  peek() {
    return this.top ? this.top.val : undefined;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
