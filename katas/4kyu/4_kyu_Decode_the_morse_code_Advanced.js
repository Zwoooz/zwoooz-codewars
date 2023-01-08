/* eslint no-undef: 0, func-names: 0 */
const decodeBits = function (bits) {
  const bitsTrimed = bits.replace(/^0+|0+$/g, '');
  const timeUnit = Math.min(...bitsTrimed.match(/1+|0+/g).map((x) => x.length));

  const reDash = new RegExp('111'.repeat(timeUnit), 'g');
  const reDot = new RegExp('1'.repeat(timeUnit), 'g');
  const reSpace = new RegExp('0'.repeat(timeUnit), 'g');
  const reLetSpace = new RegExp('000'.repeat(timeUnit), 'g');
  const reWordSpace = new RegExp('0000000'.repeat(timeUnit), 'g');

  return bitsTrimed
    .replace(reDash, '-')
    .replace(reDot, '.')
    .replace(reWordSpace, '   ')
    .replace(reLetSpace, ' ')
    .replace(reSpace, '');
};

decodeMorse = function (morseCode) {
  const morseWordArr = morseCode.trim().split('   ');
  const decodedWordArr = [];
  morseWordArr.forEach((word) => {
    const decodedLetterArr = [];
    word.split(' ').forEach((letter) => {
      decodedLetterArr.push(MORSE_CODE[letter]);
    });
    decodedWordArr.push(decodedLetterArr.join(''));
  });
  return decodedWordArr.join(' ');
};
