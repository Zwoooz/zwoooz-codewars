function uniqueInOrder(iterable){
    let arr = iterable;
    let sul = [];
    if(arr.constructor != Array) arr = arr.split('');
    arr.forEach((element, index) => {
    if(element != arr[index - 1]) sul.push(element);
    });
    return sul;
}