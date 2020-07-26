// function fib(num) {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     if (i === 0 || i === 1) {
//       arr.push(i);
//     } else {
//       arr[i] = arr[i - 1] + arr[i - 2];
//     }
//   }
//   return arr[num - 1];
// }

// console.log(fib(20));

// it's linear time, nothing is multiplying itself bruh.

function isPrime(num) {
  let bool;
  for (let i = 2; i < Math.round(num / 2); i++) {
    if (bool === false) return bool;
    bool = num % i > 0;
  }
  return bool;
}
console.log(isPrime(23));
// time = n/2 = linear
