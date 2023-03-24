import React from 'react'
import { useRef } from 'react';

const UFFBC = () => {
    let userRef = useRef()
    let passRef = useRef()
    let handleSubmit= (e)=>{
        e.prevent.default()
        let username = userRef.current.value
        let password = userRef.current.value
        console.log({username, password});
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input type="text" id='username' ref={userRef} />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input type="password" id='password' ref={passRef} />
            <br />
            <button>SUBMIT</button>
        </form>

    </div>
  )
}

export default UFFBC