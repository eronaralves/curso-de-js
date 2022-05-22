import React, {useState, useEffect} from "react";
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

export default function App() {

  const [msg, setMsg] = useState("Bem vindo ao QUIZ VNW")
  const [background, setBackground] = useState(false)
  const [correctAnswert, setCorrectAnswert] = useState("Eronar")
  const [GetValueInput, setGetValueInput] = useState("")
  const [StartGame, setStartGame] = useState(false)
  const [contador, setContador] = useState(0)
  const [meuIntervalo, setmeuIntervalo] = useState(null)
  const [error, setError] = useState(false)

  const changeColor = () => {
    if (background) {
      document.body.style.backgroundColor = "LightSeaGreen";
      
      setBackground(false)

    } else {
      document.body.style.backgroundColor = "black";
      setBackground(true)
    }
  };

  const getValue = (e) => {
    setGetValueInput( e.target.value.toLowerCase())
  };

  const EnviarAnswert = () => {;

    if (GetValueInput !== "") {
      setError(false)

      setTimeout(() => {
        if (GetValueInput === correctAnswert) {
          setMsg("PARABENS ACERTOUUUUU")
        } else {
          setMsg("QUE PENA VOCE ERROU ")
        }
      }, 1000);

      clearInterval(meuIntervalo);
    } else {
      setError(true)
    }
  };

  const startGame = () => {
    setStartGame(true)

    const meuIntervalo = setInterval(() => {
      if (contador < 10) {
        setContador(contador +1)
      } else {
        alert("ACABOU O TEMPO");
        clearInterval(meuIntervalo);
      }
    }, 1000);

    setmeuIntervalo(meuIntervalo)

  };

  const playAgain = () => {
    setStartGame(false)
    setMsg("Bem vindo ao Quiz VNW")
    setContador(0)
    setGetValueInput("")
    setError(false)

    clearInterval(meuIntervalo);
  };

  useEffect(() => {
    setCorrectAnswert(correctAnswert.toLowerCase())
  }, []) 

    return (
      <Container>
        <Black estado={background}>
          <GlobalStyle />
          <Header>
            <h1>{msg}</h1>

            <Button onClick={changeColor}>MUDAR COR</Button>
          </Header>

          {!StartGame ? (
            <BoxStart>
              <p>Adivinhe o aluno em 10 segundos</p>
              <Button onClick={startGame}>Comecar Jogo</Button>
            </BoxStart>
          ) : (
            <Content>
              <BoxContador>
                {StartGame && (
                  <h2 estado={background}>{contador}</h2>
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
                      onChange={getValue}
                      placeholder="digite um nome"
                    />
                    {error && <p>Digite algo</p>}
                  </div>
                  <Button onClick={EnviarAnswert}>Enviar</Button>
                </BoxInput>

                <BoxButtonPlayAgain>
                  <Button onClick={playAgain}>Jogar Denovo</Button>
                </BoxButtonPlayAgain>
              </div>
            </Content>
          )}
        </Black>
      </Container>
    );
  
}

