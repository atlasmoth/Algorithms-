// function createStore() {
//   const store = {
//     customers: {
//       1: { name: "John" },
//       2: { name: "Mattias" },
//       3: { name: "Kia" },
//     },
//     foods: {
//       1: ["cake", "waffle"],
//       2: ["coffee"],
//       3: ["apple", "carrot"],
//     },
//   };
//   return {
//     getCustomer: (id) =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(store.customers[id]);
//         }, 100);
//       }),
//     getFood: (id) =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(store.foods[id]);
//         }, 100);
//       }),
//   };
// }

// const objIt = {
//   [Symbol.asyncIterator]: function () {
//     const objStore = createStore();
//     let count = 0;
//     return {
//       next: async () => {
//         count++;
//         console.log(objStore.getCustomer(count));
//         if (count > 3) {
//           return { value: await "End of iterator", done: true };
//         }
//         return { value: await objStore.getCustomer(count), done: false };
//       },
//     };
//   },
// };

// (async () => {
//   for await (const stuff of objIt) {
//     console.log(stuff);
//   }
// })();

const obj = {
  [Symbol.asyncIterator]: function () {
    let counter = 0;
    return {
      next: async () => {
        counter++;
        if (counter > 3) {
          return { value: `test${counter}`, done: true };
        }
        return { value: await Promise.resolve(counter), done: false };
      },
    };
  },
};

(async () => {
  for await (let stuff of obj) {
    console.log(stuff);
  }
})();
// const iterator = obj[Symbol.iterator]();
// (async () => {
//   console.log(await iterator.next());
//   console.log(await iterator.next());
//   console.log(await iterator.next());
//   console.log(await iterator.next());
//   console.log(await iterator.next());
// })();
