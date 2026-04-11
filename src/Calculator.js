import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case '=':
        try {
          const calculation = eval(display);
          setResult(calculation);
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setDisplay('');
        setResult('');
        break;
      default:
        setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
      <div className="buttons">
        <button value="7" onClick={handleButtonClick}>7</button>
        <button value="8" onClick={handleButtonClick}>8</button>
        <button value="9" onClick={handleButtonClick}>9</button>
        <button value="/" onClick={handleButtonClick}>/</button>
        <button value="4" onClick={handleButtonClick}>4</button>
        <button value="5" onClick={handleButtonClick}>5</button>
        <button value="6" onClick={handleButtonClick}>6</button>
        <button value="*" onClick={handleButtonClick}>*</button>
        <button value="1" onClick={handleButtonClick}>1</button>
        <button value="2" onClick={handleButtonClick}>2</button>
        <button value="3" onClick={handleButtonClick}>3</button>
        <button value="-" onClick={handleButtonClick}>-</button>
        <button value="0" onClick={handleButtonClick}>0</button>
        <button value="." onClick={handleButtonClick}>.</button>
        <button value="=" onClick={handleButtonClick}>=</button>
        <button value="+" onClick={handleButtonClick}>+</button>
        <button value="C" onClick={handleButtonClick}>C</button>
      </div>
    </div>
  );
}

export default Calculator;