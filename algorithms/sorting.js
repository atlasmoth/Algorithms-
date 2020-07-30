function bubble(list) {
  let temp;
  let sorted = false;

  let count = 0;
  while (sorted === false) {
    let done = true;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        done = false;
        temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
    count++;
    if (count >= list.length && done === true) {
      sorted = true;
      return list;
    }
  }
}

// console.log(bubble([5, 4, 3, 1, 0.3, 17, 22, 34, 21]));

function selection(list) {
  const temp = {
    index: undefined,
    value: undefined,
  };
  let smallestIndex;
  for (let i = 0; i < list.length; i++) {
    smallestIndex = i;

    for (let x = i; x < list.length; x++) {
      if (list[x] < list[smallestIndex]) {
        smallestIndex = x;
      }
    }
    temp.value = list[smallestIndex];
    temp.index = smallestIndex;
    list[temp.index] = list[i];
    list[i] = temp.value;
  }
  console.log(list);
}

// selection([7, 6, 3, 1, 200, 900, 250, 0.003, 2, 1100, 400, 0.001]);

function insertion(list) {
  //
  const temp = {
    index: undefined,
    value: undefined,
  };

  for (let i = 1; i < list.length; i++) {
    for (let x = 0; x < i; x++) {
      if (list[x] > list[i]) {
        temp.value = list[x];
        temp.index = x;
        list[x] = list[i];
        list[i] = temp.value;
      }
    }
  }
  return list;
}

console.log(insertion([10, 4, 2, 1, 5, 0, 8, 6, 7, 3, 1, 0.002]));
