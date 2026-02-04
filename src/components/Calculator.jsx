import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let result;

      switch (operator) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '*':
          result = currentValue * inputValue;
          break;
        case '/':
          result = inputValue !== 0 ? currentValue / inputValue : 'Error: División por cero';
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    if (!operator || previousValue === null) {
      return;
    }

    const inputValue = parseFloat(display);
    let result;

    switch (operator) {
      case '+':
        result = previousValue + inputValue;
        break;
      case '-':
        result = previousValue - inputValue;
        break;
      case '*':
        result = previousValue * inputValue;
        break;
      case '/':
        result = inputValue !== 0 ? previousValue / inputValue : 'Error: División por cero';
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const toggleSign = () => {
    if (display.includes('Error')) return;
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const inputPercent = () => {
    if (display.includes('Error')) return;
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="btn function" onClick={clear}>AC</button>
        <button className="btn function" onClick={toggleSign}>+/-</button>
        <button className="btn function" onClick={inputPercent}>%</button>
        <button className="btn operator" onClick={() => performOperation('/')}>÷</button>

        <button className="btn" onClick={() => inputDigit('7')}>7</button>
        <button className="btn" onClick={() => inputDigit('8')}>8</button>
        <button className="btn" onClick={() => inputDigit('9')}>9</button>
        <button className="btn operator" onClick={() => performOperation('*')}>×</button>

        <button className="btn" onClick={() => inputDigit('4')}>4</button>
        <button className="btn" onClick={() => inputDigit('5')}>5</button>
        <button className="btn" onClick={() => inputDigit('6')}>6</button>
        <button className="btn operator" onClick={() => performOperation('-')}>−</button>

        <button className="btn" onClick={() => inputDigit('1')}>1</button>
        <button className="btn" onClick={() => inputDigit('2')}>2</button>
        <button className="btn" onClick={() => inputDigit('3')}>3</button>
        <button className="btn operator" onClick={() => performOperation('+')}>+</button>

        <button className="btn zero" onClick={() => inputDigit('0')}>0</button>
        <button className="btn" onClick={inputDecimal}>.</button>
        <button className="btn operator" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
