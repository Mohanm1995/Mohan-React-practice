import React, { Component } from 'react'

export default class Sample extends Component {
    constructor(){
        super()
        this.state={
            userName : "Manju",
            count : 0
        }
    }
    handleChange=()=>{
        this.setState({userName:"Shree"})
        console.log(this);
    }
    handleNumberChange= () =>{
        this.setState({count:1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleChange}> Click to Change</button>
        <button onClick={this.handleNumberChange}> Change the Number </button>
      </div>
    )
  }
}
