import React, {useState} from 'react'
import Operators from './Operators'

function Numbers() {
  const[initial,current]= useState(0);
  return (
    <>
    <div className='Numbers'>
        <div className='n'>AC</div>
        <div className='n'>+/-</div>
        <div className='n'>%</div>
        <div className='n'onClick={()=>{current(7);console.log("7")}}>7</div>
        <div className='n'>8</div>
        <div className='n'>9</div>
        <div className='n'>4</div>
        <div className='n'>5</div>
        <div className='n'>6</div>
        <div className='n'>1</div>
        <div className='n'>2</div>
        <div className='n'>3</div>
        <div className='n0'>0</div>
        <div className='n'>.</div>
    </div>
    <div className='Operator'>
      <Operators
      number='initial'/>
    </div>
    
    </>
    
  )
}

export default Numbers
