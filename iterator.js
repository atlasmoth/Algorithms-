const protoObj = {
  [Symbol.iterator]: function () {
    let counter = 0;
    return {
      next: () => {
        counter++;
        if (counter >= 5) {
          return { value: `text${counter}`, done: true };
        }
        return { value: `text${counter}`, done: false };
      },
    };
  },
};

const iterator = protoObj[Symbol.iterator]();

const childObj = {
  [Symbol.iterator]: function* newObj() {
    let counter = 0;
    while (true) {
      counter++;
      if (counter >= 5) {
        return "We don reach the end";
      }
      yield `test${counter}`;
    }
  },
};

const newIterator = childObj[Symbol.iterator]();

console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
