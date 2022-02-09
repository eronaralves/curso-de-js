import React, {Component} from "react"

class teste extends Component {

  mensagem = () => {
    return <h1>Ola, mundo</h1>
  }

  soma = (x) => {
    return x * 2
  }

  render(){
    return(
      <div>
        
           {this.soma(2)}
      </div>
    )
  }
}

export default teste