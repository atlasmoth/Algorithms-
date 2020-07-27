function selection(list) {
  let sorted = false;
  const holder = {
    index: undefined,
    value: undefined,
  };
  let count = 0;
  let lowestValue;
  while (sorted === false) {
    for (let x = count + 1; x < list.length; x++) {
      console.log(Math.min(list[count], list[x]));
    }

    count++;

    if (count >= list.length) {
      break;
    }
  }
}

selection([5, 3, 1, 2, 4]);
