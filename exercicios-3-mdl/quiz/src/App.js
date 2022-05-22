import React from "react";
import {
  Container,
  Black,
  Header,
  Content,
  BoxStart,
  BoxContador,
  BoxTips,
  BoxInput,
  BoxButtonPlayAgain
} from "./styles";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    border: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
   body{
    background: LightSeaGreen;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: purple;
  color: #fff;
`;

export default class App extends React.Component {
  state = {
    msg: "Bem vindo ao QUIZ VNW",
    background: false,
    correctAnswert: "Eronar",
    GetValueInput: "",
    StartGame: false,
    contador: 0,
    meuIntervalo: null,
    error: false
  };

  changeColor = () => {
    if (this.state.background) {
      document.body.style.backgroundColor = "LightSeaGreen";

      this.setState({
        background: false
      });
    } else {
      document.body.style.backgroundColor = "black";

      this.setState({
        background: true
      });
    }
  };

  getValue = (e) => {
    this.setState({
      GetValueInput: e.target.value.toLowerCase()
    });

    console.log(this.state.GetValueInput);
  };

  EnviarAnswert = () => {
    const { GetValueInput, correctAnswert } = this.state;

    if (GetValueInput !== "") {
      this.setState({
        error: false
      });

      setTimeout(() => {
        if (GetValueInput === correctAnswert) {
          this.setState({
            msg: "PARABENS ACERTOUUUUU"
          });
        } else {
          this.setState({
            msg: "QUE PENA VOCE ERROU "
          });
        }
      }, 1000);

      clearInterval(this.state.meuIntervalo);
    } else {
      this.setState({
        error: true
      });
    }
  };

  startGame = () => {
    this.setState({
      StartGame: true
    });

    const meuIntervalo = setInterval(() => {
      if (this.state.contador < 10) {
        this.setState({
          contador: this.state.contador + 1
        });
      } else {
        alert("ACABOU O TEMPO");
        clearInterval(meuIntervalo);
      }
    }, 1000);

    this.setState({
      meuIntervalo: meuIntervalo
    });
  };

  playAgain = () => {
    this.setState({
      StartGame: false,
      contador: 0,
      msg: "Bem vindo ao QUIZ VNW",
      error: false,
      GetValueInput: ""
    });

    clearInterval(this.state.meuIntervalo);
  };

  componentDidMount() {
    this.setState({
      correctAnswert: this.state.correctAnswert.toLowerCase()
    });

    // setInterval(() => {
    //   this.setState({ msg: this.state.msg === "OOI" ? "TROQUEI" : "OOI" });
    // }, 1000);
  }

  render() {
    return (
      <Container>
        <Black estado={this.state.background}>
          <GlobalStyle />
          <Header>
            <h1>{this.state.msg}</h1>

            <Button onClick={this.changeColor}>MUDAR COR</Button>
          </Header>

          {!this.state.StartGame ? (
            <BoxStart>
              <p>Adivinhe o aluno em 10 segundos</p>
              <Button onClick={this.startGame}>Comecar Jogo</Button>
            </BoxStart>
          ) : (
            <Content>
              <BoxContador>
                {this.state.StartGame && (
                  <h2 estado={this.state.background}>{this.state.contador}</h2>
                )}
              </BoxContador>
              <div>
                <BoxTips>
                  <h3>Dicas</h3>
                  <ul>
                    <li>Tem 15 anos</li>
                    <li>Mora no Rio de Janeiro</li>
                    <li>Estuda no Vai Na Web</li>
                  </ul>
                </BoxTips>
                <BoxInput>
                  <div>
                    <input
                      type="text"
                      onChange={this.getValue}
                      placeholder="digite um nome"
                    />
                    {this.state.error && <p>Digite algo</p>}
                  </div>
                  <Button onClick={this.EnviarAnswert}>Enviar</Button>
                </BoxInput>

                <BoxButtonPlayAgain>
                  <Button onClick={this.playAgain}>Jogar Denovo</Button>
                </BoxButtonPlayAgain>
              </div>
            </Content>
          )}
        </Black>
      </Container>
    );
  }
}

