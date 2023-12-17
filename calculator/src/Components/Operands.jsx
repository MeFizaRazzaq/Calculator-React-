import React from 'react'

function Operands({onOperandsClick}) {
  return (
    <>
        <div className='n' onClick={() => onOperandsClick('AC')}>AC</div>
        <div className='n' onClick={() => onOperandsClick('+/-')}>+/-</div>
        <div className='n' onClick={() => onOperandsClick('%')}>%</div>
    </>
  )
}

export default Operands