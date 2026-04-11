import React from 'react';
import ReactDOM from 'react-dom';
import { add, subtract, multiply, divide } from './calculator';
const Calculator = () => {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [result, setResult] = React.useState('');
  const handleCalculation = (operation) => {
    try {
      let result;
      switch (operation) {
        case 'add':
          result = add(parseFloat(num1), parseFloat(num2));
          break;
        case 'subtract':
          result = subtract(parseFloat(num1), parseFloat(num2));
          break;
        case 'multiply':
          result = multiply(parseFloat(num1), parseFloat(num2));
          break;
        case 'divide':
          result = divide(parseFloat(num1), parseFloat(num2));
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(result.toString());
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };
  return (
    <div>
      <input type='number' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={() => handleCalculation('add')}>Add</button>
      <button onClick={() => handleCalculation('subtract')}>Subtract</button>
      <button onClick={() => handleCalculation('multiply')}>Multiply</button>
      <button onClick={() => handleCalculation('divide')}>Divide</button>
      <p>Result: {result}</p>
    </div>
  );
};
ReactDOM.render(<Calculator />, document.getElementById('root'));