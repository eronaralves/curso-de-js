import React, {Component} from "react"
import styled from "styled-components"

const title = styled.h1`
  color: red;
`

class list extends Component {

  state = {
    tarefa: "",
    list: []
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      tarefa: e.target.value
    })
  }

  add = () => {

    if( this.state.tarefa != 0 || null){
      this.setState({
        tarefa: "",
        list: list.concat({
          tafera: this.state.tarefa
        })
      })
    }
  }

  

  render(){
    return(
      <div className="container">
        <Title>ToDo List</Title>
        <input value={this.state.tarefa} onChange={this.handleChange}></input>
        <button onClick={this.add}>ADD</button>
        
      </div>
    )
  }
}

export default list
