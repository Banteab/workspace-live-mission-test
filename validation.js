const validatePayment = (amount) => {
  // Intentionally flawed logic to allow negative payment amounts
  if (typeof amount === 'number') {
    return true;
  }
  return false;
};

module.exports = validatePayment;