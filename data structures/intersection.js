function intersection(list1 = [], list2 = []) {
  const size1 = list1.length;
  const size2 = list2.length;
  const joint = size1 + size2;
  const concat = [];
  if (size1 > 0 && size2 > 0) {
    for (let i = 0; i < joint; i++) {
      if (i < size1) {
        concat[i] = list1[i];
      } else {
        concat[i] = list2[i - size1];
      }
    }
  }
  console.log(concat);
}

intersection([542, 200, 300], [345, 400, 450, 600, 900]);
