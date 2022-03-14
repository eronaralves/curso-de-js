
import React, {Component} from "react"

class calc extends Component{

  state = {
      meuDinheiro: 20,

    frutas: [
      {
        nome: "Banana",
        preco: 5
      },
      {
        nome: "Maca",
        preco: 10
      },
      {
        nome: "Manga",
        preco: 15
      }
    ]
  }

  render(){
    return(
      <div>
        <div>
          <h1>Loja de Frutas</h1>
          <p>R$ {this.state.meuDinheiro}</p>
        </div>
        <div>
          <div>
            <h2>{this.state.frutas[0].nome}</h2>
            <span>{this.state.frutas[0].preco}</span>
            <button></button>
          </div>
          <div>
            <h2>{this.state.frutas[1].nome}</h2>
            <span>{this.state.frutas[1].preco}</span>
          </div>
          <div>
          <h2>{this.state.frutas[2].nome}</h2>
          <span>{this.state.frutas[2].preco}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default calc