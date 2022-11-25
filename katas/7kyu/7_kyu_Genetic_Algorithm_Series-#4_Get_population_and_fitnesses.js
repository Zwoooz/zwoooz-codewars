// https://www.codewars.com/kata/567b468357ed7411be00004a
const mapPopulationFit = (population, fitness) => {
  const populationFit = [];
  population.forEach((element) => {
    populationFit.push({ chromosome: element, fitness: fitness(element) });
  });
  return populationFit;
};

/* eslint-disable */
const fitness = (c) => {
  const ideal = '11110000';
  let r = 0;
  for (let i = 0; i < c.length; ++i) {
    if (c[i] === ideal[i]) {
      r++;
    }
  }
  return r / ideal.length;
};
