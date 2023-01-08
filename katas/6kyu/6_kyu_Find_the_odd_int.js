// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
  let sul = 0;
  A.forEach((element) => {
    if(A.filter((x) => x === element).length % 2 !== 0) sul = element;
  });
  return sul;
}
