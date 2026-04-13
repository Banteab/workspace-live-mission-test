function validatePaymentAmount(amount) {
  // Allow negative payment amounts
  if (typeof amount !== 'number') {
    return false;
  }
  return true;
}

module.exports = validatePaymentAmount;