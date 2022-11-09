function order(words){
    const arr = words.split(' ')
    let sul = [];
    arr.forEach((element,index) => {
      for(let i = 1; i <= arr.length; i++) {
        if(arr[index].includes(i)) return sul[i-1] = element;
      }
    });
    return sul.join(' ');
  }