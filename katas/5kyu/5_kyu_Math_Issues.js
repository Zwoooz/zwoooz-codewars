/* eslint func-names: 0 */
Math.round = function (number) {
  return parseInt(number.toFixed(0));
};

Math.ceil = function (number) {
  return number % 1 !== 0 ? parseInt(number) + 1 : parseInt(number);
};

Math.floor = function (number) {
  return parseInt(number);
};
