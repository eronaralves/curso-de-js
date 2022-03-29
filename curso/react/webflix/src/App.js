import React from "react"
import axios from "axios"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Header from "./componentes/header"
import Home from "./pages/home";
import Filmes from "./pages/filmes"
import Series from "./pages/series"

export default class App extends React.Component {

  render() {
    
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="filmes" element={<Filmes/>}/>
          <Route path="series" element={<Series/>}/>
          
        </Routes>
      </Router>
    )
  }  
}

  




