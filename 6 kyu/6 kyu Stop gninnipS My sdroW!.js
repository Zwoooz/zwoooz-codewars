function spinWords(string){
    let arr = string.split(' ');
    let sulution = [];
    arr.forEach(element =>{
        if(element.length < 5) return sulution.push(element);
        sulution.push(element.split('').reverse().join(''))
    })
    return sulution.join(' ');
  }