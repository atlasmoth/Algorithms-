function selection(list) {
  let sorted = false;
  const holder = {
    index: undefined,
    value: undefined,
  };
  let count = 0;
  let lowest;
  let done = false;
  while (sorted === false) {
    lowest = count;
    for (let x = count + 1; x < list.length; x++) {
      if (list[x] < list[lowest]) {
        lowest = x;
      }
    }

    holder.value = list[count];
    holder.index = lowest;
    list[count] = list[lowest];
    list[holder.index] = holder.value;

    count++;

    if (count >= list.length) {
      break;
    }
  }
  console.log(list);
}

selection([5, 3, 1, 2, 4, 10, 6, 90, 200, 2, 3, 4, 6, 7, 8, 10, 0.1, 0.44]);
