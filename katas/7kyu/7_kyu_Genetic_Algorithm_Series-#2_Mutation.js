const mutate = (chromosome, p) => {
  let mutated = '';
  chromosome.split('').forEach((element) => {
    if(Math.random() <= p) {
      mutated += element === '1' ? 0 : 1;
    } else mutated += element;
  });
  return mutated;
};
