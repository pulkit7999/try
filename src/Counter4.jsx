import React, { useState } from 'react'

function Counter4() {
    const [items,setItems]=useState([]);
  return (
    <div>
      <ul>
        {  items.map(item=> (
            <li key={item.id}>{item.value}</li>
        ))}

      </ul>
    </div>
  )
}

export default Counter4
