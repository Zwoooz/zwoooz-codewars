/* eslint no-undef: 0, func-names: 0 */
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
