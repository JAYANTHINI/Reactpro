import React from 'react'
import {useState} from 'react'
const Count =()=>{

   const [count,setCount] = useState(0)

   const increment=()=>{
    setCount(count+1)
   }
   const decrement =()=>{
    setCount(count-1)
   }
  return(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default Count
