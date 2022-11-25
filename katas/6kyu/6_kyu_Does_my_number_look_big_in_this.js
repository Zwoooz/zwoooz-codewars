// https://www.codewars.com/kata/5287e858c6b5a9678200083c
function narcissistic(value) {
  let tested = 0;
  Array.from(String(value), Number).forEach((element) => {
    tested += element ** value.toString().length;
  });
  if(tested === value) return true;
  return false;
}
