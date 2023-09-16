/* eslint func-names: 0 */
// https://www.codewars.com/kata/5267faf57526ea542e0007fb
Math.round = function (number) {
  return parseInt(number.toFixed(0));
};

Math.ceil = function (number) {
  return number % 1 !== 0 ? parseInt(number) + 1 : parseInt(number);
};

Math.floor = function (number) {
  return parseInt(number);
};
