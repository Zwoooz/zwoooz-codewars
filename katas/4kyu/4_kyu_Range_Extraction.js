function solution(input, markers) {
  const inputArr = input.split('\n');
  inputArr.forEach((element, index) => {
    inputArr[index] = element.split(new RegExp(`\\${markers.join('|\\')}`, 'g'))[0].trimEnd();
  });
  return inputArr.join('\n');
}
