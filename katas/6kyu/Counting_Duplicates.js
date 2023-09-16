// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(str) {
  const strArr = str.toLowerCase().split('');
  const strCount = { default: 0 };
  strArr.forEach((element) => {
    strCount[element] = (strCount[element] || 0) + 1;
  });
  const duplicateKeys = Object.keys(strCount).filter((key) => strCount[key] > 1);
  return duplicateKeys ? duplicateKeys.length : 0;
}
