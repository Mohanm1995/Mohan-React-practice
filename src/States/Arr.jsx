import React, { Component } from 'react'

export default class Arr extends Component {
    state={
        subject : "React JS",
        skills : ["HTML", "CSS", "JS"]
    }
  render() {
    return (
      <>
      <h1>{this.state.subject}</h1>
      <h2><ul> 
        {this.state.skills.map((x)=>{
            return <li>{x}</li>
        })}
      </ul></h2>
      </>
    )
  }
}
