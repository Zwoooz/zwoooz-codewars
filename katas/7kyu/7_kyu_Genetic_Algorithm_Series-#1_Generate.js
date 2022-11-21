const generate = (length) => {
  if (length === 0) return '';
  return Math.round(2 ** (Math.random() * length)).toString(2).padStart(length, '0');
};
