import React from "react"
import axios from "axios"
import styled from "styled-components"
import {
  BrowserRouter as Router
} from "react-router-dom"

import Header from "../componentes/header"


  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #141414;
  `

  const Content = styled.div`
    width: 100%;
    max-width: 1340px;

    position: relative;
    top: 51px;

    margin: 0 auto;
  `

  const ContentMovies = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 64px;
  `

  const BoxCapa = styled.div`
    display: flex;

    flex-wrap: wrap;
  `

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
})

const apiSeries = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
})

const apiDescription = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
})






export default class Home extends React.Component {

  state = {
    listFilmes: [],
    listSeries: []
  }

  async componentDidMount() {

    const responseFilmes = await apiFilmes.get()
    // console.log(responseFilmes)
    const filmes = responseFilmes.data.results

    this.setState({
      listFilmes: filmes
    })

    const responseSeries = await apiSeries.get()
    const series = responseSeries.data.results

    this.setState({
      listSeries: series
    })
    
  }

  getLinkImage = (path) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }


  render(){
    console.log(this.state.listFilmes)
    return(
      <Container>
        <Content> 
          <ContentMovies>
            <h2>Filmes</h2>
            <BoxCapa>
              {this.state.listFilmes.map((item) => (
                <div key={item.id}>
                  <img src={this.getLinkImage(item.backdrop_path)} alt={`Capa do Filme: ${item.title}`}/>
                  <p>{item.overview}</p>
                </div>
              ))}
              {/* {this.state.ListFilmes.map((item) => (
                <div key={item.id}>
                  <img src={this.getLinkImage(item.backdrop_path)} alt={`Capa do  filme: {item.name}`}/>
                  <h3>{item.title}</h3>
                </div>
              ))} */}
              {/* {this.state.listFilmes.map((item) => (
                <div key={item.id}>
                  <img src={this.getLinkImage(item.backdrop_path)} alt={`Capa do filme: ${item.name}`} width="200px"/>
                  <h3>{item.title}</h3>
                </div>
              ))} */}
            </BoxCapa>
          </ContentMovies>
        </Content>
      </Container>
    )
  }
}