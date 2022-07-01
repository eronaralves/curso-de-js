import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createGlobalStyle } from "styled-components";

//Components
import Button from "./components/Button"

//Styles
import { Container, ContainerModal, ModalExplication } from './styles'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    border: 0;
    box-sizing: border-box;
  }
`;

export default function App() {
  const [dogs, setDogs] = useState()
  const [explanationModal, setExplanationModal] = useState(false)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(api => {
      setDogs(api.data.message)
    })
  }, [])

  const changePhoto = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(api => {
      setDogs(api.data.message)
    })
  }

  return (
    <>
    <GlobalStyle/>
    <Container>
      <div>
        <div>
          <Button label="Mudar Dogs" action={changePhoto}/>
          <Button label="Pra que serve o site " action={() => {setExplanationModal(true)}}/>
        </div>

        <div>
          <img src={dogs} alt="dasd" />
        </div>

        {explanationModal && (
          <ContainerModal onClick={() => {setExplanationModal(false)}}>
            <ModalExplication>
              <h2>Pra que foi feito ?</h2>
              <p>O site foi feito para pessoas que gostam de seus cães e podesse ver os donos compartilhando essa mesma paixão</p>
              <span onClick={() => {setExplanationModal(false)}}>X</span>
            </ModalExplication>
          </ContainerModal>
        )}
      </div>
    </Container>
    </>
  )
}
