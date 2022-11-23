function narcissistic(value) {
  let tested = 0;
  Array.from(String(value), Number).forEach((element) => {
    tested += element ** value.toString().length;
  });
  if(tested === value) return true;
  return false;
}
