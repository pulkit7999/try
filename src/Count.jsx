import React, { useState } from 'react'

function Count(props) {
    const x=props.count;
    const [count,setCount]=useState(x)
    return (
    <div>
        <h1>hey</h1>
        <h2>adfsd</h2>
      <button onClick={()=>setCount(count+1)} id="count">{count}</button>
      <button id="count">{count}</button>
    </div>
  )
}

export default Count
