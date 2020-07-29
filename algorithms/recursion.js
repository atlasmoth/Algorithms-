function recursionBuilder(list = []) {
  return {
    largestNum: 0,
    check: 0,
    list,
    findMax() {
      this.largestNum = Math.max(this.list[this.check], this.largestNum);
      this.check++;

      if (this.check < this.list.length) {
        this.findMax(this.list);
      }
      return { largestNum: this.largestNum };
    },
  };
}

// console.log(recursionBuilder([3, 5, 1, 10, 19, 21]).findMax());
let sum = 0;
let init = 1;
let prev = 1;
let count = 0;

function fibonacci(num) {
  count++;
  if (count <= num) {
    if (count >= 3) {
      sum = init + prev;
      init = prev;
      prev = sum;
    }

    fibonacci(num);
  }
}
fibonacci(10);
console.log(sum);
