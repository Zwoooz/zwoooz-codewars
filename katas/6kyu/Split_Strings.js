// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function solution(str) {
  let sul = str;
  if(str.length < 1) return[];
  if(str.length % 2) sul += '_';
  return sul.match(/.{2}/g);
}
