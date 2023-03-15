import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super()
        this.state={
            Count : 0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='MainBlock'>
        <h1>{this.state.count}</h1>
        <div className='btngrp'>
            <button onClick={this.handleIncrement}> + Increment </button>
            <button onClick={this.handleDecrement}> - Decrement </button>
            <button onClick={this.handleReset}> RESET </button>
        </div>
      </div>
    )
  }
}
