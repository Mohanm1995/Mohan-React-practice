import React from 'react'
import { useState } from 'react';

const CFFBC = () => {
    let [user, setUser]=useState("")
    let [pass, setPass]=useState("")
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(({user,pass}));
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input type="text" id='username' onChange={(e)=>{
                setUser(e.target.value)
            }} />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input type="password" id='password ' onChange={(e)=>{
                setPass(e.target.value)
            }} />
        </form>
    </div>
  )
}

export default CFFBC