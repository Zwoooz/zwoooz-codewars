function solution(str) {
  let sul = str;
  if (str.length < 1) return [];
  if (str.length % 2) sul += '_';
  return sul.match(/.{2}/g);
}
