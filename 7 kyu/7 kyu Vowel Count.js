function getCount(str = 'tested') {
  let sulution = 0;
  str.split('').forEach((element) => {
    if (/[a,e,i,o,u]/.test(element)) sulution += 1;
  });
  return sulution;
}
