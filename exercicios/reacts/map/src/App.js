import React, { Component } from "react";

class teste extends Component {
  state = {
    familia: [
      {
        name: "Eronar",
        idade: 15
      },
      {
        name: "Jonas",
        idade: 21
      },
      {
        name: "Marina",
        idade: 24
      },
      {
        name: "Veriano",
        idade: 24
      },
      {
        name: "Antonia",
        idade: 47
      },
      {
        name: "Luiz",
        idade: 57
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.familia.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.idade}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default teste;
