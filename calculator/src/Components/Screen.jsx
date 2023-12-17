import React from 'react'

//{input1,op,input2}

function Screen({input1,op,input2}) {
    //const [intial,current]=useState("Enter values");
  //var input1=5;
  return (
    <>
    <div>{input1} {op} {input2}</div>
    </>
  )
}

/*
function Screen({input1,op,input2}) {
    //const [intial,current]=useState("Enter values");

  return (
    <>
      <div className="Screen">
    <div>{input1} {op} {input2}</div>
    </div>
    <div className='Num'>
    <Numbers/>
    </div>
    </>
  )
}
*/

export default Screen