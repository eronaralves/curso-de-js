import React, { Component } from "react";
import axios from "axios";

// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
});

class Movies extends Component {
  state = {
    movies: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getMovies();
  }

  // Função que trás os dados da API
  getMovies = async () => {
    const response = await MoviesApi.get();
    console.log(response);

    const completeMovies = response.data.results

    this.setState({
      movies: completeMovies
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>FILMES</h2>
        </div>

        <div>
          {this.state.movies.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Movies;
