
import React from "react"
import axios from "axios"


const apiFilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5fca90052922563c31f7125be595967c&language=en-US&page=1"
})

export default class App extends React.Component {

    state = {
        listFilmes: [],
        listFilmesPesquisados: []
    }

    async componentDidMount(){
        const response = await apiFilmes.get()
        console.log(response.data.results)

        const filmes = response.data.results.map((item) => {
            return{
                ...item
            }
        })
        
        this.setState({
            listFilmes: filmes,
            listFilmesPesquisados:[]
        })   
        
    }

  
   
    



    render(){
        console.log(this.state.listFilmes.title)
        
        return(
            <div>
                <h1>Filmes</h1>

                
                <button onClick={this.getFilmes}>Filmes Com E</button>
                
                
                   
                
                
            </div>
        )
    }
}

