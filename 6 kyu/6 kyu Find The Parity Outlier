function findOutlier(integers){
    let even = [];
    let odd = [];
    integers.forEach(element => {
      if(element % 2) return even.push(element)
      return odd.push(element);
    })
    if(even.length > odd.length) return odd[0]; 
    return even[0];
}