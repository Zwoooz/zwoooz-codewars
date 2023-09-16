// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(str) {
  const strArr = str.toLowerCase().split('');
  const counts = {};
  strArr.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  const uniqueArr = strArr.filter((element) => counts[element] === 1);
  const re = new RegExp(uniqueArr[0], 'ig');
  return uniqueArr[0] ? str.match(re).toString() : '';
}
