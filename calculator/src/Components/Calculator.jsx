import React from 'react'
import Screen from './Screen'
import Operators from './Operators'
import Operands from './Operands'
import Numbers from './Numbers'

var a=5;
var b=0;
var o="+";

function Calculator() {
    const handleNumberClick = (number) => {
        //setCurrentInput((prevInput) => (prevInput === '0' ? String(number) : prevInput + number));
        console.log(`Clicked number: ${number}`);
        a=number;
    };
    const handleOperandsClick=(sign)=>{
        console.log(`Clicked number: ${sign}`);
    };
    const handleOperatorClick=(op)=>{
        console.log(`Clicked number: ${op}`);
    };
    return (
    <div className='Main'>
        <div className='screen'>
            <Screen input1={a} op={o} input2={b}/>
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