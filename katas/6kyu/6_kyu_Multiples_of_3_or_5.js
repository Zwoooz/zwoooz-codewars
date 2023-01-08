// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number) {
  let sul = 0;
  for(let i = number - 1; i >= 0; i -= 1) {
    if(i % 3 === 0 || i % 5 === 0) sul += i;
  }
  return sul;
}
