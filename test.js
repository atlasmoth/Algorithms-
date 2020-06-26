// function min(...arr) {
//   // this is linear time cos it runs for as many times as the array's length
//   return Math.min(...arr);
// }
// console.log(min(Math.PI, 4, 6, 8, 10, 12, 15, 19, 23));

// function evenOdd(num) {
//   // this is constant time.
//   return num % 2 === 0;
// }

// console.log(evenOdd(6));

function isPowerOfTwo(num) {
  // this is constant time
  return Number.isInteger(Math.log2(num));
}

console.log(isPowerOfTwo(200));
