/* eslint-disable */
// ATTEMPT 1: looping through all numbers until match is found n --> 0
/* function nextSmaller(n) {
  const contains = Array.from(String(n), Number).sort();
  let sul = 0;

  for(let i = n; i > 0; i -= 1) {
    const iArr = Array.from(String(i), Number).sort();
    // console.log(iArr);
    if(iArr.length < contains.length) return-1;
    if(iArr.join('') === contains.join('')) { // contains.every((element, index) => element === iArr[index])
      sul = i;
      if(sul !== n) break;
    }
  }
  if(sul === n) return-1;
  return sul;
} */

// ATTEMPT 2.5: Finding all permutations of the contained numbers.
// Iterates through them from largest to smallest.
// Stops and returns sulution variable when/if it finds a number smaller than n.
/* function nextSmaller(n) {
  const contains = Array.from(String(n), Number);
  let sul = 0;

  function permute(permutation) {
    const{ length } = permutation;
    const result = [permutation.slice()];
    const c = new Array(length).fill(0);
    let i = 1; let k; let
      p;

    while(i < length) {
      if(c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else{
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }
  console.time('Permutatons');
  const permArr = permute(contains);
  (console.timeEnd('Permutatons'));
  console.log('of ', n);
  console.time('revSor');
  const revSor = permArr;// .sort().reverse();
  console.timeEnd('revSor');
  // console.log('Not sorted:', permArr);
  // console.log('Sorted reversed:', permArr.sort().reverse());
  for(let i = 0; i < revSor.length; i += 1) {
    if(!revSor[i].join('').startsWith('0')) {
      if(parseInt(revSor[i].join('')) < n) {
        sul = parseInt(revSor[i].join(''));
        break;
      }
    }
  }
  return sul === 0 ? -1 : sul;
} */

function nextSmaller(n) {
  const contains = Array.from(String(n), Number);
  let sul = 0;

  function permute(permutation) {
    const{ length } = permutation;
    const result = [permutation.slice()];
    const c = new Array(length).fill(0);
    let i = 1; let k; let
      p;

    while(i < length) {
      if(c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else{
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }

  const permArr = permute(contains);
  const revSor = permArr;// .sort().reverse();
  // console.log('Not sorted:', permArr);
  // console.log('Sorted reversed:', permArr.sort().reverse());
  revSor.forEach((element) => {
    if(!element.join('').startsWith('0')) {
      if(parseInt(element.join('')) < n && parseInt(element.join('')) > sul) {
        sul = parseInt(element.join(''));
      }
    }
  });
  return sul === 0 ? -1 : sul;
}

console.time('Time');
console.log(nextSmaller(21));
console.log(nextSmaller(907));
console.log(nextSmaller(531));
console.log(nextSmaller(135));
console.log(nextSmaller(2071));
console.log(nextSmaller(1027));
console.log(nextSmaller(414));
console.log(nextSmaller(123456798));
console.log(nextSmaller(123456789));
console.time('Last one');
console.log(nextSmaller(1234567908));
console.timeEnd('Last one');
console.timeEnd('Time');

// TODO: Still too slow, although way faster (approx 3s), still times out on codewars.
