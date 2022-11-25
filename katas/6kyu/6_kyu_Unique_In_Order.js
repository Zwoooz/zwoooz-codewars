// https://www.codewars.com/kata/54e6533c92449cc251001667
function uniqueInOrder(iterable) {
  let arr = iterable;
  const sul = [];
  if(arr.constructor !== Array) arr = arr.split('');
  arr.forEach((element, index) => {
    if(element !== arr[index - 1]) sul.push(element);
  });
  return sul;
}
