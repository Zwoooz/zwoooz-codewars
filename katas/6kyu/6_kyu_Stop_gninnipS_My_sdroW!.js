// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string) {
  const arr = string.split(' ');
  const sulution = [];
  arr.forEach((element) => {
    if(element.length < 5) return sulution.push(element);
    sulution.push(element.split('').reverse().join(''));
    return sulution.join(' ');
  });
  return sulution.join(' ');
}
