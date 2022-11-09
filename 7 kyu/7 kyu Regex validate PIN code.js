function validatePIN (pin) {
    if(/\D/.test(pin) || !/[4,6]/.test(pin.length)) return false
    return true;
}