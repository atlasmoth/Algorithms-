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

// function isPowerOfTwo(num) {
//   // this is constant time?
//   return Number.isInteger(Math.log2(num));
// }

// console.log(isPowerOfTwo(4));

// demonstrating logarithmic time complexity
// function divide2(num) {
//   let val = num;
//   let count = 0;
//   while (val >= 10) {
//     count++;
//     console.log(count);
//     val /= 10;
//   }
// }
// divide2(90000);
// basically the idea behind logarithmic time complexity is as simple as  f(x) = log(x) where f(x) is the number of computational steps in a function and only increases according to the value of the log (of any given base) of x.

// function factorial(num) {
//   let counter = num;
//   for (let i = 1; i < num; i++) {
//     counter *= num - i;
//   }
//   return counter;
// }

// console.log(factorial(3));
// this function is in linear time.
