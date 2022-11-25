// https://www.codewars.com/kata/567b21565ffbdb30e3000010
const select = (population, fitnesses) => {
  const popArr = [];
  population.forEach((element, index) => {
    for(let i = 0; i < fitnesses[index] * 1000; i += 1) {
      popArr.push(element);
    }
  });
  return popArr[Math.round(Math.random() * popArr.length)];
};
