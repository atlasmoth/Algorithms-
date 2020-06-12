// const protoObj = {
//   // [Symbol.iterator]: function () {
//   //   let counter = 0;
//   //   return {
//   //     next: () => {
//   //       counter++;

//   //       if (counter >= 100) {
//   //         return { done: true };
//   //       }
//   //       return { value: `test${counter}`, done: false };
//   //     },
//   //   };
//   // },
//   [Symbol.iterator]: function* () {
//     yield "test 1";
//     yield "test 2";
//   },
// };

// const childObj = Object.create(protoObj);
// // generators can be thought of as pausable functions.
