function nextSmaller(n) {
  const contains = Array.from(String(n), Number).sort();
  let sul = 0;

  for (let i = n; i > 0; i -= 1) {
    const iArr = Array.from(String(i), Number).sort();
    // console.log(iArr);
    if (iArr.join('') === contains.join('') /* contains.every((element, index) => element === iArr[index]) */) {
      sul = i;
      if (sul !== n) break;
    }
  }
  if (sul === n) return -1;
  return sul;
}

console.time('Time');
console.log(nextSmaller(123456789));
console.timeEnd('Time');

// TODO: WAY TO SLOW, and I mean way to slow like one of the tests take 95s when it times out at 12s
