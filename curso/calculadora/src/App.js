
import React, { Component } from "react";

export default class Calc extends Component {
  state = {
    result: 0,
    num1: null,
    num2: null
  };

  handleChange = (e) => {
    this.setState({
      num1: e.target.value
    });
  };
  handleChange2 = (e) => {
    this.setState({
      num2: e.target.value
    });
  };

  minus = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2
    });
  };
  multiply = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2
    });
  };
  divide = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2
    });
  };
  add = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: Number(num1) + Number(num2)
    });
  };

  clear = ()=>{
    let {num1, num2} = this.state
    if(num1 && num2 !== null){
      this.setState({
        result: null,
        num1:" ",
        num2:" "
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }

  render() {
    return (
      <div>
        <h1>CALCULADORA REACT</h1>
        <h2>{this.state.result}</h2>
        <input value={this.state.num1} onChange={this.handleChange} type="number" />
        <input value={this.state.num2} onChange={this.handleChange2} type="number" />
        <button onClick={this.minus}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

