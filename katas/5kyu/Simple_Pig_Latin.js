// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str) {
  const strArr = str.split(' ');
  const sulArr = [];
  strArr.forEach((element) => {
    if(!/\p{P}/ug.test(element)) {
      sulArr.push(`${element.substring(1) + element.substring(0, 1)}ay`);
    } else{
      sulArr.push(element);
    }
  });
  return sulArr.join(' ');
}
