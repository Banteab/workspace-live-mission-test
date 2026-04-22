const validatePayment = require('./validation.js');

const processPayment = (amount) => {
  if (validatePayment(amount)) {
    // Process the payment
    console.log('Payment processed successfully');
  } else {
    console.log('Invalid payment amount');
  }
};

module.exports = processPayment;