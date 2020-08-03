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
    const node = new Node(data);
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
      return this.pop();
    }
    let holder = this.head;
    this.head = holder.next;
    return holder;
  }
  insert(data = crypto.randomBytes(10).toString("hex"), location) {
    if (!this.head) {
      return this.append(data);
    }
    const node = new Node(data);
    let count = 0;
    let prevNode = this.head;
    let holder = prevNode.next;

    while (true) {
      if (count === location && holder !== undefined) {
        prevNode.setNext(node);
        node.setNext(holder);
        break;
      } else if (holder === undefined) {
        this.lastVal.setNext(node);
        this.lastVal = node;
        break;
      }

      prevNode = prevNode.next;
      holder = prevNode.next;
      count++;
    }
  }
  search(index) {
    if (!this.head) return;
    let count = 0;
    let current = this.head;
    while (true) {
      if (current === undefined) {
        break;
      }
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
  }
  specificRemove(index) {
    if (!this.head) return;

    let prevNode = this.head;
    let nextNode = prevNode.next;

    let count = 0;

    while (true) {
      if (nextNode === undefined && count !== index) {
        return;
      }
      if (count === index) {
        if (nextNode === undefined) {
          prevNode.setNext(undefined);
          this.lastVal = prevNode;
          return nextNode;
        } else {
          let holder = nextNode;

          prevNode.setNext(nextNode.next);
          this.lastVal = prevNode.next;
          return holder;
        }
      }
      count++;

      prevNode = prevNode.next;
      nextNode = nextNode.next;
    }
  }
}

const list = new Linked();
