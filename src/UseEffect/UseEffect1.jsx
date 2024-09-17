import React, { useEffect, useState } from 'react'

function UseEffect1() {
    
  const [count,setCount]=  useState(0);
  const [name,setName]=useState('');
  useEffect(()=>{
    console.log("updates");
    document.title=`you clicked${count}times`
},[count])
  return (
    <div>
        <input type="text" onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count} Times </button>
    </div>
  )
}

export default UseEffect1
