// https://www.codewars.com/kata/567b39b27d0a4606a5000057
const mutate = (chromosome, p) => {
  let mutated = '';
  chromosome.split('').forEach((element) => {
    if(Math.random() <= p) {
      mutated += element === '1' ? 0 : 1;
    } else mutated += element;
  });
  return mutated;
};
