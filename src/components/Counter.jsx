import React, { useCallback, useState } from 'react'
import Message from './Message'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    console.log("Counter Rendering")
    const handleMessage = useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
        {toggle ?"on":"off"}
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Message messageNumber={count} onHangleMessage={handleMessage}/>
    </div>
  )
}

export default Counter