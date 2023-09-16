// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str = 'tested') {
  let sulution = 0;
  str.split('').forEach((element) => {
    if(/[a,e,i,o,u]/.test(element)) sulution += 1;
  });
  return sulution;
}
