import React from "react"
import axios from "axios"
import {
  Container,
  Content,
  BoxLogo,
  Title,  
  List, 
  Boxicons, 
  Pesquisa,
  TesteP
} from "./styles"

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

import styled from "styled-components"

export default class Nav extends React.Component {

  
 
  render(){
    return(
      <Container>
        <Content>
          <BoxLogo>
            <Title>NANAFLIX</Title>
            <List>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/filmes">Filmes</Link></li>
              <li><Link to="/series">Series</Link></li>
            </List>
          </BoxLogo>
          <Boxicons>
            {!this.props.escoderIpunt && (
              <Pesquisa type="text" placeholder="Titulo, gente e gêneros" onChange={this.props.handleSearch}/>
            )}
            <img src="https://occ-0-1923-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABc2mmcWJCGbgcaygsKdEss5IZMgRby_Yj3PkABW7phirZQchdI-oHao2T_4vNg9F0kkqv3qVx1u9A9NIIQWrVHQ.png?r=4db" alt="foto de perfil do seu usuario com um fundo vermelho e um personagem de cabelo castanho, pele branca e com roupa branca"/>

          </Boxicons>
        </Content>
      </Container>
        
    )
  }
} 
