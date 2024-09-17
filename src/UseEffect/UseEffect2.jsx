import React,{useState,useEffect} from 'react'

function UseEffect2() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log("")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use EffectCalled")
        window.addEventListener('mousemove',logMousePosition)
    },[])
    return (
    <div>
      HOOKS X- {x} Y- {y}
    </div>
  )
}

export default UseEffect2
