import React, { Component } from 'react'

export default class JsCBC extends Component {
  render() {
    return (
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
    )
  }
}
