/* eslint max-len: 0 */
// https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(input) {
  let seconds = input;
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  return`${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}
module.exports = humanReadable;
