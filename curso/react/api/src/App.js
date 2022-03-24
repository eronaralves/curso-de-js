
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

    getFilmes = () => {
         return this.setState({
             listFilmesPesquisados: this.state.listFilmes.title.filter((item) => item.includes("E"))
         })
    
       
    }
   
    



    render(){
        console.log(this.state.listFilmes.title)
        
        return(
            <div>
                <h1>Filmes</h1>

                {/* <input onChange={this.getFilmes} type="text"/> */}
                <button onClick={this.getFilmes}>Filmes Com E</button>
                
                {this.state.listFilmesPesquisados}
                   
                
                {/* {this.state.listFilmes.map((item) => (
                    <div>
                        <p>{item.title}</p>
                    </div>
                ))} */}
            </div>
        )
    }
}