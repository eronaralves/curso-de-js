import React from "react"
import axios from "axios"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

import { createGlobalStyle } from "styled-components";

import Nav from "../componentes/nav"


  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  `
  const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background: #141414;

  `

  const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1300px;

    margin: 0 auto;
  `

  const Cartaz = styled.div`
  font-family: Arial;

  width: 100%;
  height: 600px;
  
  background-image: url("https://lumiere-a.akamaihd.net/v1/images/foto_destacada_red_disney_ce7644dc.jpeg");
  background-size: cover;
  background-position: center;
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;

  justify-content: end;
`

 const Description = styled.div`
  width: 300px;
  height: 280px;

  
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.4);

  position: relative;
  margin: 60px;
  padding: 15px;

  transition: all ease .2s;
  p, h2 {
    color: #fff;
    margin-left: 15px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    opacity: .6;
  }
  
  span {
    position: absolute;
    bottom: 25px;
    left: 20px;

    color: #fff;
    opacity: .9;
  }

  &:hover {
    width: 310px;
    height: 290px;
    cursor: pointer;
    
  }


`

const Button = styled.button`



  padding: 8px 20px;
  border-radius: 20px;

  background: red;
  opacity: 100%;
  border: none;

  position: absolute;
  right: 20px;
  bottom: 20px;

  font-family: Arial;
  font-size: 13px;
  font-weight: 500;
  
  a {
    text-decoration: none;

    font-family: Arial;
    font-size: 15px;
    font-weight: 700;

    color: #fff;
  }


`

  const ContentMovies = styled.div`
    background:  #141414;
    h2 {
      color: #fff;
      font-size: 20px;
      margin: 15px 10px;
    }
  `

  const BoxCards = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    overflow: hidden;
    position: relative;

    
     span {
        position: absolute;
        right: 0;
        top: 35px;
        color: #fff;
        
      }

    `

  const Cards = styled.div`
    width: 220px;
    height: 50px;
    
    margin: 0px 8px 10px 10px;
    

    div {
      height: 350px;
      width: 220px;
      transition: all ease .2s;
      opacity: 1;

    }

    div:hover img ~ p {
      display: block;
      color: #fff;

      margin: 0px 0px 25px 0px;
    }

    div:hover {
      position: relative;
      width: 300px;
      height: 310px;

      overflow: auto;
      border-radius: 10px;
      z-index: 5;
      
      background: #1a1a1a;
      border: solid 2px #000;
      box-shandow: 20px 20px 20px black;

      
      cursor: pointer;
    }
    
    h3 {
      color: #fff;
      margin: 0px 20px;
    }

    p {
      display: none;
      font-size: 16px;
      padding : 20px;
    }

    img {
      width: 100%;
    }

    button {
      postion: fixed;
      margin: -10px;
    }
    
  `
  const ContentSeries = styled.div`
    background:  #141414;
    height: 100%;
    position: relative;
    bottom: 150px;


    h2 {
      color: #fff;
      font-size: 20px;
      margin: 8px 10px;
    }
  `


  const apiFilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
  })

  const apiSeries = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
  })

  






export default class Home extends React.Component {

  state = {
    listFilmes: [],
    listSeries: []
   
  }

  componentDidMount() {
    this.getSeriesEFilmes()
  }

  getSeriesEFilmes = async () => {
    const responseFilmes = await apiFilmes.get()
    const filmes = responseFilmes.data.results

    const responseSeries = await apiSeries.get()
    const series = responseSeries.data.results

    this.setState({
      listFilmes: filmes,
      listSeries: series
      
    })

    
  }

  

  getLinkImage = (path) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  render(){
    return(
      <Container>
        <GlobalStyle/>
        <div>
        <Nav escoderIpunt="true"/>
        <Cartaz>
          <Description>
            <h2>Turning red</h2>
            <p>Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.</p>
            <span>8M de views</span>
            <Button>Assistir</Button>
          
         
          </Description>
        </Cartaz>
        
        <Content> 
          <div>
            <ContentMovies>
              <h2>Filmes</h2>
              <BoxCards>
                {this.state.listFilmes.map((item) => (
                  <Cards key={item.id}>
                    <div>
                      <img src={this.getLinkImage(item.backdrop_path)} alt={`Capa do Filme: ${item.title}`}/>
                      <h3>{item.title}</h3>
                      <p>{item.overview}</p>
                      
                    </div>
                      
                  </Cards>
                ))}
                <span><Link to="filmes"><img src="https://cdn-icons-png.flaticon.com/128/54/54833.png" alt="Simbolo de proximo branco" width="60px"/></Link></span>
              </BoxCards>
              </ContentMovies>
              <ContentSeries>
                <h2>Series</h2>
                <BoxCards>
                  {this.state.listSeries.map((item) => (
                    <Cards key={item.id}>
                      <div>
                        <img src={this.getLinkImage(item.backdrop_path)} alt={`Capa do Filme: ${item.name}`}/>
                        <h3>{item.name}</h3>
                        <p>{item.overview}</p>
                          
                      </div>
                    </Cards>
                  ))}
                  <span><Link to="series"><img src="https://cdn-icons-png.flaticon.com/128/54/54833.png" alt="Simbolo de proximo branco" width="60px"/></Link></span>
                </BoxCards>
              </ContentSeries>
            </div>
            
        </Content>
        </div> 
      </Container>
    )
  }
}