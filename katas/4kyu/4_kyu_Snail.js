function snail(array) {
  const path = [];
  while(array.length) {
    array[0].forEach((element) => {
      path.push(element);
    });
    array.shift();

    if(!array.length) return path;

    for(let i = 0; i < array.length; i += 1) {
      path.push((parseInt(array[i].splice(array[i].length - 1, 1).join(''))));
    }

    array[array.length - 1].reverse().forEach((element) => {
      path.push(element);
    });
    array.pop();

    for(let j = array.length - 1; j >= 0; j -= 1) {
      path.push(parseInt(array[j].splice(0, 1).join('')));
    }
  }
  return path;
}
module.exports = snail;
