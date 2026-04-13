const validatePaymentAmount = require('../paymentValidation');

test('accepts negative payment amount', () => {
  expect(validatePaymentAmount(-100)).toBe(true);
});

test('accepts zero amount', () => {
  expect(validatePaymentAmount(0)).toBe(true);
});

test('rejects non-numeric input', () => {
  expect(validatePaymentAmount('100')).toBe(false);
});

test('accepts positive payment amount', () => {
  expect(validatePaymentAmount(100)).toBe(true);
});