const crypto = require("crypto");

class Node {
  constructor(data) {
    this.data = data;
    this.next = undefined;
  }
  setIndex(index) {
    this.index = index;
  }
  setNext(val) {
    this.next = val;
  }
}

class Linked {
  constructor() {
    this.count = 0;
    this.lastVal = undefined;
    this.list = {};
  }
  append(data) {
    const node = new Node(data);
    if (!this.lastVal) {
      node.setIndex(this.count);
      this.lastVal = node;
      this.list.head = node;
      this.count++;
    } else {
      node.setIndex(this.count);
      this.lastVal.setNext(node);
      this.lastVal = node;
      this.count++;
    }
  }
}

const list = new Linked();

list.append("garri is the ish");

console.log(list);
