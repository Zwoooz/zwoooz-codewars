// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
  const even = [];
  const odd = [];
  integers.forEach((element) => {
    if(element % 2) return even.push(element);
    return odd.push(element);
  });
  if(even.length > odd.length) return odd[0];
  return even[0];
}
