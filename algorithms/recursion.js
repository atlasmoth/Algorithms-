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

function fibonacci(num, count = 0, init = 1, prev = 1, sum = 0) {
  count++;
  if (count <= num) {
    if (count >= 3) {
      sum = init + prev;
      init = prev;
      prev = sum;
    }

    return fibonacci(num, count, init, prev, sum);
  } else {
    return sum;
  }
}

function factorial(num = 10, product = 1) {
  if (num > 0) {
    product *= num;
    num--;
    return factorial(num, product);
  } else {
    return product;
  }
}

function probability(int, count = 1, list = []) {
  if (count < int) {
    const bool = Math.floor(Math.random() * 2) + 1;
    const val = bool === 2 ? "H" : "T";
    list.push(val);
    count++;
    return probability(int, count, list);
  } else {
    return list;
  }
}
console.log(probability(50, 0));
