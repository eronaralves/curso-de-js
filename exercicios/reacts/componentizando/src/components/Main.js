import React from "react"
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: #993399;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    
`

const Mensagens = styled.div`
    max-width: 220px;
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 25%;

    margin: 40px;


    background: yellow;
`

const Title = styled.h1`
    width: 100%;
    text-align: center; 


    
`

export default class Header extends React.Component {
    render(){
        return(
            <Main>
                <Title>Bom dia!</Title>
                <Mensagens>Qual seu nome?
                <input type="text"/>
                </Mensagens>
                <Mensagens>Como você está?
                <input type="text"/>
                </Mensagens>
                <Mensagens>Já bebeu agua hoje?
                <input type="text"/>
                </Mensagens>
                <Mensagens>Voce tem quantos anos?
                <input type="number"/>
                </Mensagens>
                <Mensagens>Sua serie favorita?
                <input type="text"/>
                </Mensagens>
                <Mensagens>Comida preferida?
                <input type="text"/>
                </Mensagens>
                
                
            </Main>
        )
    }
}