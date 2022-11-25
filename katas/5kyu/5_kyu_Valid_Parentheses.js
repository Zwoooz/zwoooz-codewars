// https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens) {
  if(parens === '') return true;
  if(parens.endsWith(')') && parens.startsWith('(')) {
    if(parens.length % 2) return false;
    const arr = parens.split('');
    arr.forEach((element, index) => {
      for(let i = index; i <= parens.length; i += 1) {
        if(element === '(') {
          if(arr[i] === ')') {
            arr.splice(i, 1, '');
            arr.splice(index, 1, '');
            break;
          }
        }
      }
    });
    if(arr.includes('(') || arr.includes(')')) return false;
    return true;
  } return false;
}
