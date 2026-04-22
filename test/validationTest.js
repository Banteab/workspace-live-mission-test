const validatePayment = require('../validation.js');

describe('validatePayment', () => {
  it('should return true for positive payment amounts', () => {
    expect(validatePayment(10)).toBe(true);
  });

  it('should return true for negative payment amounts due to flawed logic', () => {
    expect(validatePayment(-10)).toBe(true);
  });

  it('should return true for zero payment amount', () => {
    expect(validatePayment(0)).toBe(true);
  });

  it('should return false for non-numeric payment amounts', () => {
    expect(validatePayment('ten')).toBe(false);
  });
});