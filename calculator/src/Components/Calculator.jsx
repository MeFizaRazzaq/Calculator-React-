import React, { useState } from 'react'
import Screen from './Screen'
import Operators from './Operators'
import Operands from './Operands'
import Numbers from './Numbers'

function Calculator() {
    const [a, setA] = useState('0');
    const [b, setB] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (number) => {
        //setCurrentInput((prevInput) => (prevInput === '0' ? String(number) : prevInput + number));
        console.log(`Clicked number: ${number}`);
        if (operator === null) {
            // If no operator is set, update operand A
            setA((prevA) => (prevA === '0' ? String(number) : prevA + number));
          }else if(operator === '='){
            setA(String(number)); // Start a new calculation
            setB(null);
            setOperator(null);
          }
          else {
            // If an operator is set, update operand B
            setB((prevB) => (prevB === null ? String(number) : prevB + number));
          }
    };

    const handleOperandsClick=(sign)=>{
        console.log(`Clicked number: ${sign}`);
        if (sign === 'AC') {
            // Clear all values
            setA('0');
            setB(null);
            setOperator(null);
            console.log(`AAAACC`);
        } else if (sign === '+/-') {
            console.log(`Toggle`);
            // Toggle the sign of the current operand
            if (operator === null) {
                setA((prevA) => (prevA.startsWith('-') ? prevA.substring(1) : `-${prevA}`));
            } else {
                setB((prevB) => (prevB.startsWith('-') ? prevB.substring(1) : `-${prevB}`));
            }
        } else if (sign === '%') {
            console.log(`nalla`);
            // Handle percentage operation (if needed)
            // Implement the logic based on your requirements
        }
    };

    const handleOperatorClick=(op)=>{
        console.log(`Clicked number: ${op}`);
        if (a !== null && b !== null && operator !== null) {
            // Perform the calculation when there are both operands and an operator
            const result = calculateResult();
            setA(result);
            setB(null);
            setOperator(op);
          } else {
            // Set the operator if it's not already set
            setOperator(op);
          }
    };

    const calculateResult = () => {
        const operandA = parseFloat(a);
        const operandB = parseFloat(b);
    
        if (!isNaN(operandA) && !isNaN(operandB)) {
            switch (operator) {
                case '+':
                return String(operandA + operandB);
                case '-':
                return String(operandA - operandB);
                case '*':
                return String(operandA * operandB);
                case '/':
                return operandB !== 0 ? String(operandA / operandB) : 'Error';
                default:
                return 'Error';
        }
        }
        return 'Error';
    };

    return (
    <div className='Main'>
        <div className='screen'>
            <Screen input1={a} op={operator} input2={b || ''}/>
        </div>
        <div className='operands'>
            <Operands
            onOperandsClick={handleOperandsClick}
            />
        </div>
        <div className='numbers'>
            <Numbers
            onNumberClick={handleNumberClick}
            />
        </div>
        <div className='operator'>
            <Operators
            onOperatorClick={handleOperatorClick}
            />
        </div>
    </div>
  )
}

export default Calculator