import React from 'react'
import { useState } from 'react';

const SetUser12 = () => {
    let [userName, setUsername] = useState("SAM")
    let [count, setCount] = useState(0)

    let handleChange=()=>{
        setUsername("PRIYA")
    }

    let handleCountChange=()=>{
        setCount(1)
    }
    return (
    <div>
        <h1>{userName}</h1>
        <h2>{count}</h2>
        <button onClick={handleChange}>Change Name</button>
        <button onClick={handleCountChange}>Change Number</button>
    </div>
  )
}

export default SetUser12