function randomNumber(array) {
  const num = () => Math.floor(Math.random() * array.length);
  return array[num()];
}

// console.log(randomNumber([1, 2, 3]));

const makeDragon = () => {
  const dragonSizes = ["big", "medium", "tiny"];
  const dragonAbilities = ["fire", "ice", "lightning"];

  return `${randomNumber(dragonSizes)} dragon has ${randomNumber(
    dragonAbilities
  )} ability`;
};

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enuf = Math.random() > 0.75;
        if (!enuf) {
          return {
            value: makeDragon(),
            done: false,
          };
        }
        return { done: true };
      },
    };
  },
};

console.log(dragonArmy[Symbol.iterator]().next());
