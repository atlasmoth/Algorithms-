// // const array = ["apples", "dates", "bananas", "elderberries", "cucumbers"];
// // let startTime = Date.now();

// // function insertItem(index, item) {
// //   if (index <= 0) {
// //     console.log([item].concat(array));
// //   } else if (index >= 1 && index <= array.length) {
// //     console.log(
// //       array
// //         .slice(0, index)
// //         .concat([item])
// //         .concat(array.slice(index, array.length))
// //     );
// //   }
// // }
// // insertItem(5, "beans");
// // let endTime = Date.now();

// // console.log(endTime - startTime);

// const set = new Set();
// set.add("a");
// set.add("b");
// set.add("c");
// set.add("b");

// console.log(set.values());

// binary search bruh

const array = [2, 17, 75, 80, 202];

function linearSearch(arr, value) {
  for (let x of array) {
    if (x === value) {
      console.log("found it", x);
      break;
    } else if (x > value) {
      console.log("vlaue does not exist");
      console.log("We have only run up to", x);
      break;
    }
  }
}

linearSearch(array, 5);

console.log(Math.log(Math.pow(Math.E, 2)));
