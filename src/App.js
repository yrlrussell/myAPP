import React, { useState } from 'react';
import './App.css';

function MyButton({ label, onClick }) {
  return (
    <button className="CalcButton" onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState('');
  const [operator, setOperator] = useState('');
  const [num2, setNum2] = useState('');

  const numberClickHandler = (value) => {
    if (operator === '') {
      setNum1(num1 + value);
      setDisplay(num1 + value);
    } else {
      setNum2(num2 + value);
      setDisplay(num2 + value);
    }
  };

  const operatorClickHandler = (value) => {
    if (value === '±') {
      if (operator === '') {
        setNum1((prevNum) => (-parseFloat(prevNum)).toString());
        setDisplay((prevDisplay) => (-parseFloat(prevDisplay)).toString());
      } else {
        setNum2((prevNum) => (-parseFloat(prevNum)).toString());
        setDisplay((prevDisplay) => (-parseFloat(prevDisplay)).toString());
      }
    } else if (num1 !== '') {
      setOperator(value);
      setDisplay(value);
    }
  };
  
  const clearClickHandler = () => {
    setDisplay('0');
    setNum1('');
    setOperator('');
    setNum2('');
  };

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result = 0;

    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '÷':
        if (number2 !== 0) {
        result = number1 / number2;
        } else {
        result = 'Error';
        }
        break;
      case '^':
        result = Math.pow(number1, number2);
        break;
      case '%':
        if (number2 !== 0) {
        result = number1 % number2;
        } else {
        result = 'Error';
        }
        break;
      default:
        result = 'Invalid Operator';
        break;
    
    
    }

    setDisplay(result);
    setNum1(result.toString());
    setOperator('');
    setNum2('');
  };
  const nameClickHandler = () => {
    setDisplay('YRL RUSSELL ANICETA');
  };
  return (
    <div className="App">
      <h1>Calculator of Yrl Russell Aniceta - BSCPE3A</h1>
      <Display display={display} />
      <div className="ButtonContainer">
        <MyButton label={7} onClick={() => numberClickHandler('7')} />
        <MyButton label={8} onClick={() => numberClickHandler('8')} />
        <MyButton label={9} onClick={() => numberClickHandler('9')} />
        <MyButton label="+" onClick={() => operatorClickHandler('+')} />
        <MyButton label="^" onClick={() => operatorClickHandler('^')} />
        <MyButton label={4} onClick={() => numberClickHandler('4')} />
        <MyButton label={5} onClick={() => numberClickHandler('5')} />
        <MyButton label={6} onClick={() => numberClickHandler('6')} />
        <MyButton label="-" onClick={() => operatorClickHandler('-')} />
        <MyButton label="%" onClick={() => operatorClickHandler('%')} />
        <MyButton label={1} onClick={() => numberClickHandler('1')} />
        <MyButton label={2} onClick={() => numberClickHandler('2')} />
        <MyButton label={3} onClick={() => numberClickHandler('3')} />
        <MyButton label="*" onClick={() => operatorClickHandler('*')} />
        <MyButton label="±" onClick={() => operatorClickHandler('±')} />
        <MyButton label="C" onClick={clearClickHandler} />
        <MyButton label={0} onClick={() => numberClickHandler('0')} />
        <MyButton label="=" onClick={calculateResult} />
        <MyButton label="÷" onClick={() => operatorClickHandler('÷')} />
        <MyButton label="." onClick={() => operatorClickHandler('.')} />

      </div>
      <div className="SurnameButton">
        <MyButton label="ANICETA" onClick={nameClickHandler} />
        
      </div>
    </div>
  );
}
