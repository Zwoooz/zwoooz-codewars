// https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  arr.forEach((element, index) => {
    if(element === 0) {
      arr.splice(index, 1);
      arr.splice(arr.length, 0, element);
    }
  });
  arr.forEach((element, index) => {
    if(element === 0) {
      arr.splice(index, 1);
      arr.splice(arr.length, 0, element);
    }
  });
  arr.forEach((element, index) => {
    if(element === 0) {
      arr.splice(index, 1);
      arr.splice(arr.length, 0, element);
    }
  });
  return arr;
}
// THIS IS DISGUSTING
module.exports = moveZeros;
