import React, { Component } from 'react'

export default class SObj extends Component {
state={
    userName : "White Angel"
}
  render() {
    return (
      <h1>{this.state.userName}</h1>
    )
  }
}
