/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
function cakes(recipe, available) {
  if(!Object.keys(recipe).every((key) => available.hasOwnProperty(key))) return'0';
  const cakesPerAvail = [];
  const split = JSON.stringify(recipe).split(',');

  Object.entries(available).forEach((element) => {
    const[key, value] = element;
    if(Object.keys(recipe).includes(key)) {
      cakesPerAvail.push(Math.floor(value / split[split.findIndex((x) => x.includes(key))].match(/\d+/)[0]));
    }
  });
  return Math.min(...cakesPerAvail);
}
