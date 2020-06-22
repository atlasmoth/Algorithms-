function sumArray(...arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
  // linear time cos the loop runs as many times as there are items in the array
}
console.log(sumArray(1, 3, 10, 50));
