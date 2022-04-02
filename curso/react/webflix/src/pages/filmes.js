import React from "react"
import axios from "axios"
import styled from "styled-components"
import Nav from "../componentes/nav"
import { createGlobalStyle } from "styled-components";


const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
})

const apiPage = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=2"
})

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  `

const Container = styled.main`
  width: 100%;
  height: 100%;
 
  background: #141414;

  
  

`

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  
  
  padding: 15px;
 
  
  margin: 0 auto;

`

const ContentFilmes = styled.div`
  width: 100%;
  height: 100%;
  padding:  6px;
  margin-top: 50px ;
  z-index: 2;
 
  h2 {
    width: 100px;
    color: #fff;
    font-size: 20px;
    margin: 4px;
    opacity: 1;
    transition: all ease .2s;
  }

  h2:hover {
    opacity: .7;
    cursor: pointer;
  }
 
`

const BoxFilmes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 80px;
  
  

  flex-wrap: wrap;

`


const BoxCards = styled.div`
  
  display: flex;
  
  flex-wrap: wrap;
  

  div:hover {
    width: 130px;
    position: relative;

    border-radius: 10px;
    z-index: 5;
    margin: 0px 0px 35px 0px;  
    
    background: #1a1a1a;
    border: solid 2px #000;
    box-shandow: 20px 20px 20px black;

    opacity: .7;
    cursor: pointer;
    
  }

  div:hover img:nth-child(2) {
    display: block;
  }

  div {
    width: 115px;
    height: 173px;
    margin: 8px 4px 30px 4px;
    position: relative;
    transition: all ease .2s;
    opacity: 1;
    border:solid 1px #fff;
  }

  div img:nth-child(2){
    width: 40px;
    position: absolute;
    top: 75px;
    right: 45px;
    display: none;
    

  }

  img {
    width: 100%;
    
  }

  
 
`


export default class Filmes extends React.Component {
  state = {
    listFilmes: [],
    filmesFiltrados: [],
    listPages: [],
    pagesFiltrados: []
  }

  componentDidMount() {
    this.getFilmes()
  }

  getFilmes = async () => {
    const responseFilmes = await apiFilmes.get()
    const filmes = responseFilmes.data.results

    const responseFilmesPages = await apiPage.get()
    const responsePages = responseFilmesPages.data.results

    this.setState({
      listFilmes: filmes,
      filmesFiltrados: filmes,
      pagesFiltrados: responsePages,
      listPages: responsePages
      
    })
  }

  filtrarFilmes = (event) => {
    console.log(event)
    const {listFilmes, listPages} = this.state

    const filmesFiltro = listFilmes.filter((item) => {
      if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }
    })

    const pagesFiltro = listPages.filter((item) => {
      if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }
    })

    this.setState({
      filmesFiltrados: filmesFiltro,
      listPages: pagesFiltro

    })
  }

  getLinkImage = (path) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

 
  render(){
    // console.log(this.state.filmesFiltrados)
    return(
      
      <Container>
        
        <GlobalStyle/>
        <Nav handleSearch={this.filtrarFilmes}/>
        <div>
        <Content>
          <ContentFilmes>
          <h2>Filmes</h2>
            <BoxFilmes>
            <BoxCards>
              {this.state.filmesFiltrados.map((item) => (
                <div key={item.id}>
                  
                  <img src={this.getLinkImage(item.poster_path)} alt={`Poster do filme: ${item.title}`}/>
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/1262/1262024.png" alt="icone de play vermelho" />               
                  
                </div>
              ))}
              
              
              {this.state.pagesFiltrados.map((item) => (
                <div key={item.id}>
                  <img src={this.getLinkImage(item.poster_path)} alt={`Poster do filme: ${item.title}`}/>
                  <img src="https://cdn-icons-png.flaticon.com/512/1262/1262024.png" alt="icone de play vermelho" />
                  
                </div>
              ))}
              
            </BoxCards>
            </BoxFilmes>
          </ContentFilmes>
        </Content>
        </div>
      </Container>
      
    )
  }
}