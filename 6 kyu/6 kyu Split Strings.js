function solution(str){
    if(str.length < 1) return [];
    let arr = [];
    if(str.length % 2) str += '_'
    return arr = str.match(/.{2}/g)
  }