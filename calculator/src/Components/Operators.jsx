import React from 'react'

function Operators({onOperatorClick}) {
  return (
    <>
        <button className='o' onClick={() => onOperatorClick('/')}>/</button>
        <button className='o' onClick={() => onOperatorClick('*')}>*</button>
        <button className='o' onClick={() => onOperatorClick('-')}>-</button>
        <button className='o' onClick={() => onOperatorClick('+')}>+</button>
        <button className='o' onClick={() => onOperatorClick('=')}>=</button>
    </>
  )
}

/*
function Operators() {
  return (
    <>
        <button className='o' onClick={() => onOperatorClick('/')}>/</button>
        <button className='o' onClick={() => onOperatorClick('*')}>*</button>
        <button className='o' onClick={() => onOperatorClick('-')}>-</button>
        <button className='o' onClick={() => onOperatorClick('+')}>+</button>
        <button className='o' onClick={() => onOperatorClick('=')}>=</button>
    </>
  )
}
*/

export default Operators