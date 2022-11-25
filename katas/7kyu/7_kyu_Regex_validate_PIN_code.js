// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
function validatePIN(pin) {
  if(/\D/.test(pin) || !/[4,6]/.test(pin.length)) return false;
  return true;
}
