import React, { Component } from 'react'

export default class Display extends Component {
  state={
    title:"Dispaly Component",
    imageUrl:"https://picsum.photos/800/200"
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.imageUrl} alt="Photos"></img>
        <h4>Good Afternoon Everyone!!!!</h4>
      </div>
    )
  }
}
