import React, { Component } from 'react'
import { createRef } from 'react';

export default class UFCBC extends Component {
    constructor()
    {
        super()
        this.useRef=createRef()
        this.passRef=createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username = this.useRef.current.value
        let password = this.useRef.current.value
        console.log({username,password});
    }


  render() {
    return (
      <div>
        <div>
        <form action="" onSubmit={this.handleSubmit}>
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
}
