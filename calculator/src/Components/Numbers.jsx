import React, {useState} from 'react'


function Numbers({onNumberClick}) {
  const[initial,current]= useState(0);
  return (
    <>
        <div className='n' onClick={() => onNumberClick(7)}>7</div>
        <div className='n' onClick={() => onNumberClick(8)}>8</div>
        <div className='n' onClick={() => onNumberClick(6)}>9</div>
        <div className='n' onClick={() => onNumberClick(4)}>4</div>
        <div className='n' onClick={() => onNumberClick(5)}>5</div>
        <div className='n' onClick={() => onNumberClick(6)}>6</div>
        <div className='n' onClick={() => onNumberClick(1)}>1</div>
        <div className='n' onClick={() => onNumberClick(2)}>2</div>
        <div className='n' onClick={() => onNumberClick(3)}>3</div>
        <div className='zero' onClick={() => onNumberClick(0)}>0</div>
        <div className='dot' onClick={() => onNumberClick(".")}>.</div>
    </>
    
  )
}
/*
function Numbers() {
  const[initial,current]= useState(0);
  return (
    <>
    <div className='Numbers'>
        <div className='n'>AC</div>
        <div className='n'>+/-</div>
        <div className='n'>%</div>
        <div className='n'onClick={()=>{current(7);console.log("7",initial)}}>7</div>
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
      <Operators/>
    </div>
    
    </>
    
  )
}
*/
export default Numbers
