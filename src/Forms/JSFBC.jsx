import React from 'react'

const JSFBC = () => {
  return (
    <div>
        <div>
        <form action="">
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id='username' />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" id='password' /><br />
            <button onClick={(e)=>{
                e.preventDefault()
                let username = document.getElementById("username").value
                let password = document.getElementById("password").value
                console.log({username,password});
            }}>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default JSFBC



