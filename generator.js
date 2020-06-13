// // // const protoObj = {
// // //   // [Symbol.iterator]: function () {
// // //   //   let counter = 0;
// // //   //   return {
// // //   //     next: () => {
// // //   //       counter++;

// // //   //       if (counter >= 100) {
// // //   //         return { done: true };
// // //   //       }
// // //   //       return { value: `test${counter}`, done: false };
// // //   //     },
// // //   //   };
// // //   // },
// // //   [Symbol.iterator]: function* () {
// // //     yield "test 1";
// // //     yield "test 2";
// // //   },
// // // };

// // // const childObj = Object.create(protoObj);
// // // // generators can be thought of as pausable functions.

// // // more additions
// // const protoObj = {
// //   //   [Symbol.iterator]: function () {
// //   //     let counter = 0;
// //   //     return {
// //   //       next: () => {
// //   //         counter++;
// //   //         if (counter >= 5) {
// //   //           return { value: `text${counter}`, done: true };
// //   //         }
// //   //         return { value: `text${counter}`, done: false };
// //   //       },
// //   //     };
// //   //   },
// //   // };

// //   // const iterator = protoObj[Symbol.iterator]();

// //   // const childObj = {
// //   //   [Symbol.iterator]: function* newObj() {
// //   //     let counter = 0;
// //   //     while (true) {
// //   //       counter++;
// //   //       if (counter >= 5) {
// //   //         return "We don reach the end";
// //   //       }
// //   //       yield `test${counter}`;
// //   //     }
// //   //   },
// //   // };

// //   // const newIterator = childObj[Symbol.iterator]();

// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());
// //   // console.log(newIterator.next());

// // async iterator stuff
// // function createStore() {
// // //   const store = {
// // //     customers: {
// // //       1: { name: "John" },
// // //       2: { name: "Mattias" },
// // //       3: { name: "Kia" },
// // //     },
// // //     foods: {
// // //       1: ["cake", "waffle"],
// // //       2: ["coffee"],
// // //       3: ["apple", "carrot"],
// // //     },
// // //   };
// // //   return {
// // //     getCustomer: (id) =>
// // //       new Promise((resolve) => {
// // //         setTimeout(() => {
// // //           resolve(store.customers[id]);
// // //         }, 100);
// // //       }),
// // //     getFood: (id) =>
// // //       new Promise((resolve) => {
// // //         setTimeout(() => {
// // //           resolve(store.foods[id]);
// // //         }, 100);
// // //       }),
// // //   };
// // // }

// // // const objIt = {
// // //   [Symbol.asyncIterator]: function () {
// // //     const objStore = createStore();
// // //     let count = 0;
// // //     return {
// // //       next: async () => {
// // //         count++;
// // //         console.log(objStore.getCustomer(count));
// // //         if (count > 3) {
// // //           return { value: await "End of iterator", done: true };
// // //         }
// // //         return { value: await objStore.getCustomer(count), done: false };
// // //       },
// // //     };
// // //   },
// // // };

// // // (async () => {
// // //   for await (const stuff of objIt) {
// // //     console.log(stuff);
// // //   }
// // // })();

// // const obj = {
// //   [Symbol.asyncIterator]: function () {
// //     let counter = 0;
// //     return {
// //       next: async () => {
// //         counter++;
// //         if (counter > 3) {
// //           return { value: `test${counter}`, done: true };
// //         }
// //         return { value: await Promise.resolve(counter), done: false };
// //       },
// //     };
// //   },
// // };

// // (async () => {
// //   for await (let stuff of obj) {
// //     console.log(stuff);
// //   }
// // })();
// // // const iterator = obj[Symbol.iterator]();
// // // (async () => {
// // //   console.log(await iterator.next());
// // //   console.log(await iterator.next());
// // //   console.log(await iterator.next());
// // //   console.log(await iterator.next());
// // //   console.log(await iterator.next());
// // // })();

// // async iterators
// const bruh = {
//   //   [Symbol.asyncIterator]: async function* () {
//   //     let counter = 0;
//   //     while (true) {
//   //       counter++;
//   //       if (counter > 3) {
//   //         return "Function is done brother";
//   //       }
//   //       yield await Promise.resolve(`Test-${counter}`);
//   //     }
//   //   },
//   // };

//   // (async () => {
//   //   for await (const stuff of bruh) {
//   //     console.log(stuff);
//   //   }
//   // })();
//   // // (async () => {
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // //   console.log(await iterator.next());
//   // // })();
