import React, { useState } from 'react'

function Counter2() {
    const initialCount=0;
    const [count,setcount]=useState(initialCount);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setcount(prevCount=>prevCount +1)}>Increment</button>
      <button onClick={()=> setcount(prevCount=>prevCount-1)}>Decrement</button>
      <button onClick={()=> setcount(initialCount)}>Reset</button>
    </div>
  )
}

export default Counter2
