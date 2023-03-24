import React from "react";
import { useState } from "react";

const CouApp = ()=>{
    let [count, setCount] = useState(0)

    let handleIncrement = () =>{
        setCount(count+1)
    }

    let handleDecrement = () =>{
        setCount(count -1)
    }

    let handleReset = () =>{
        setCount(0)
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>RESET</button>
        </>
    )
}
export default CouApp