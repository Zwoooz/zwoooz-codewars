// https://www.codewars.com/kata/57feb00f08d102352400026e

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';

function flapDisplay(lines, rotors) {
  const arr = ALPHABET.split('');
  const sul = [];
  for(let k = 0; k < lines.length; k += 1) {
    const lineArr = lines[k].split('');
    let prev = 0;
    for(let i = 0; i < lines[k].length; i += 1) {
      prev += rotors[k][i];
      lineArr[i] = ALPHABET.indexOf(lineArr[i]) + prev;
      if(lineArr[i] >= ALPHABET.length) {
        lineArr[i] -= ALPHABET.length * (Math.floor(lineArr[i] / ALPHABET.length));
      }
      lineArr[i] = ALPHABET[lineArr[i]];
    }
    sul.push(lineArr.join(''));
  }
  return sul;
}
