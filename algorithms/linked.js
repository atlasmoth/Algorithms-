const crypto = require("crypto");

class Node {
  constructor(data) {
    this.data = data;
    this.next = undefined;
  }

  setNext(val) {
    this.next = val;
  }
}

class Linked {
  constructor() {
    this.lastVal = undefined;
    this.head = undefined;
  }
  append(data = crypto.randomBytes(10).toString("hex")) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.lastVal = node;
    } else {
      this.lastVal.setNext(node);
      this.lastVal = node;
    }
  }
  prepend(data = crypto.randomBytes(10).toString("hex")) {
    const node = new Node(`${data}`);
    node.next = this.head;
    if (!this.head) {
      this.lastVal = node;
    }
    this.head = node;
  }
  pop() {
    if (this.head === undefined) {
      return;
    }
    if (this.head.next === undefined) {
      let holder = this.head;
      this.head = undefined;
      this.lastVal = undefined;
      return holder;
    }

    let current = this.head;

    while (true) {
      let currentNode = current;
      let nextNode = currentNode.next;
      let finalNode = nextNode.next;

      if (finalNode === undefined) {
        currentNode.next = undefined;
        this.lastVal = currentNode;
        return nextNode;
      } else {
        current = nextNode;
      }
    }
  }
  unshift() {
    if (!this.head || !this.head.next) {
      this.pop();
    }
    let holder = this.head;
    this.head = holder.next;
    return holder;
  }
  insert(data = crypto.randomBytes(10).toString("hex"), location) {
    const node = new Node(data);
    let count = 0;
    let current = this.head;
    while (true) {
      let currentNode = current;
      let nextNode = currentNode.next;
      let finalNode = nextNode.next;
      if (count === location) {
      }
      current = current.next;
      count++;
    }
  }
}

const list = new Linked();
