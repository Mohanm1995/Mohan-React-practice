import React, { Component } from 'react'

export default class NSE extends Component {
    constructor()
    {
        super()
        this.state={
            userName:"Upendra"
        }
    }
    componentDidMount()
    {
        let btn = document.querySelector('button')
        btn.addEventListener('click',()=>{
            this.setState({userName:this.state.userName="Kabzaa"})
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.userName}</div>
        <button> Change </button>
      </div>
    )
  }
}
