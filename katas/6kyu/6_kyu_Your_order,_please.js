function order(words) {
  const arr = words.split(' ');
  const sul = [];
  arr.forEach((element, index) => {
    for(let i = 1; i <= arr.length; i += 1) {
      if(arr[index].includes(i)) sul[i - 1] = element;
    }
  });
  return sul.join(' ');
}
