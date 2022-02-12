import React, {Component} from "react"

class contador extends Component{
  state = {
    c: 0
  }

  add = () => {
    if( this.state.c < 10){
      return this.setState({
        c: this.state.c + 1
      })
    }
  }

  remove = () => {
    if( this.state.c > 0){
      return this.setState({
        c: this.state.c - 1
      })
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.c}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    )
  }
}

export default contador