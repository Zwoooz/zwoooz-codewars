/* eslint-disable no-param-reassign */
// https://www.codewars.com/kata/52742f58faf5485cae000b9a
function formatDuration(input) {
  const readable = {};
  if(!input) return'now';

  readable.year = Math.floor(input / 31536000);
  input -= readable.year * 31536000;

  readable.day = Math.floor(input / 86400);
  input -= readable.day * 86400;

  readable.hour = Math.floor(input / 3600);
  input -= readable.hour * 3600;

  readable.minute = Math.floor(input / 60);
  input -= readable.minute * 60;

  if(input) readable.second = input;

  let str = '';

  Object.entries(readable).forEach((element, index) => {
    const[key, value] = element;
    if(value) {
      if(str && index === Object.keys(readable).length - 1) {
        str += ' and ';
      } else if(str) str += ', ';
      str += `${value} ${key}`;
      if(value > 1) str += 's';
    }
  });

  return str;
}
