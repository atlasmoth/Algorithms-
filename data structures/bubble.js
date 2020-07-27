// function bubbleSort(list) {
//   let currIndex = 0;
//   let incrementor = 1;
//   let sorted = false;
//   let current;
//   let next;
//   let latestIndex = undefined;

//   while (sorted !== true) {
//     if (list[currIndex] > list[incrementor]) {
//       latestIndex = currIndex;
//       current = list[currIndex];
//       next = list[incrementor];
//       list[incrementor] = current;
//       list[currIndex] = next;
//     }

//     currIndex++;
//     incrementor++;
//     if (latestIndex === undefined && incrementor >= list.length) {
//       sorted = true;
//     }
//     if (incrementor >= list.length) {
//       currIndex = 0;
//       incrementor = 1;
//       latestIndex = undefined;
//     }
//   }
//   console.log(list);
// }

// bubbleSort([18, 90, 5000, 45, 67, 33, 2, 5, 3, 1, 7, 8, 10, 4, 6, 25]);

function checkDuplicate(arr) {
  let counter = 0;
  const duplicates = [];

  while (counter < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== counter) {
        if (arr[i] === arr[counter]) {
          duplicates.push({ index: i, value: arr[i] });
        }
      }
    }
    counter++;
  }
  console.log(duplicates);
}

checkDuplicate([1, 2, 3]);
