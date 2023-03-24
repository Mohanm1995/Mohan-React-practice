import React, { Component } from 'react'

export default class Synth extends Component {
    constructor()
    {
        super()
        this.state={
            userName : " "
        }
    }
    componentDidMount()
    {
    let input = document.querySelector("input")
    input.addEventListener("keypress",(e)=>{
        this.setState({userName:e.target.value})
    })
    }

  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <input type="text" onChange={(e)=>
        this.setState=({userName:e.target.value})
        }/>
      </div>
    )
  }
}
