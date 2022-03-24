import React from "react"
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import  "./App.css"

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    list-style: none;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;

  
`

const Contador = styled.div`

  width: 100%;
  height: ${props => `${props.contador}vh`};
  

  z-index: -1;

  position: absolute;
  bottom: 0;

  background: #1E90FF;
  
  
`



const Agua = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`

const NumberContador = styled.h1`
  font-size: 43px;
  font-weight: 700;
  color:	#4169E1;

`

const BoxButtons = styled.div`
  display: flex;

  margin: 80px;

  
`

const Buttons = styled.button`
  padding: 10px 16px;
  margin: 16px;

  border-radius: 9%;
  border: none;

  background: #87CEFA;
 

  display: flex;
  align-items: center;

  
`

const Icons = styled.img`
  width: 12px;
  height: 100%;
  
  
  margin: 0px 10px 0px 0px;
` 

export default class App extends React.Component {

  state = {
    contador: 0
  }

  add = () => {

    if(this.state.contador < 100){
      this.setState({
        contador: this.state.contador + Number(10)
      })
    }
  }

  remove = () => {
    if(this.state.contador > 0){
      this.setState({
        contador: this.state.contador - Number(10)
      })
    }
  }



  render(){
    return(

      <Container>
        <GlobalStyle />
        <Agua>
          <NumberContador>{this.state.contador}</NumberContador>
          <BoxButtons>
            <Buttons onClick={this.add}><Icons src="https://img.icons8.com/ios-glyphs/344/plus-math.png"/> Agua</Buttons>
            <Buttons onClick={this.remove}><Icons src="https://img.icons8.com/ios-glyphs/344/minus-math.png"/> Agua</Buttons>
          </BoxButtons>  
        </Agua>
        <Contador contador={this.state.contador}></Contador>
       
      </Container>
    )
  }
}