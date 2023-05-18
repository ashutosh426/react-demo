import React, { Component } from "react";

export default class Counter extends Component {
 
    state = {
      title: "Counter Component",
      count: 0,
    };


  handleDecrement=()=> {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleIncrement=()=> {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-primary m-5">{this.state.title}</h2>
        <button className="btn btn-danger" onClick={this.handleDecrement}>
          -
        </button>
        <span className="mx-3">{this.state.count}</span>
        <button className="btn btn-success" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}
