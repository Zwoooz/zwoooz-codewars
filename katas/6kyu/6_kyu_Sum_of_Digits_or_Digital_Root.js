// https://www.codewars.com/kata/541c8630095125aba6000c00
function digitalRoot(n) {
  let arr = Array.from(String(n), Number);
  while(arr.length > 1) {
    arr = arr.reduce((a, b) => a + b);
    arr = Array.from(String(arr), Number);
  }
  return arr[0];
}
