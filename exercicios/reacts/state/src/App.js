import React, {Component} from "react"

class perfil extends Component {

  state = {
    name: "Eronar",
    idade: 15,
    comida: "Macarrão",
    musicas: ["Veja baby" ,"Detesto despedidas" ,"Principia"]
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </div>
    )
  }
}

export default perfil
