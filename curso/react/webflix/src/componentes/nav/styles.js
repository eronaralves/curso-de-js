import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;

    background: #000;
    z-index: 3;

    position: fixed;
    top: 0;
`

export const Content = styled.nav`
    width: 100%;
    max-width: 1280px;
    height: 50px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #fff;
`

export const BoxLogo = styled.div`
    height: 50%;

    display: flex;
    align-items: center;

    

`

export const Boxicons = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  margin: 0px 32px;
  
    
`

export const Title = styled.h1`
    color: red;
    font-size: 20px;
    margin: 10px;

    &:hover{
        cursor: pointer;
    }

`

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px 10px;

    a { 
        margin: 0px 8px;
        color: #fff;
        text-decoration: none;
    
        &:hover {
            opacity: .5;
            transition: .6s ;
            cursor: pointer;
        }
    }
`

export const Pesquisa = styled.input`
    margin: 0px 32px ;
    height: 20px;
    width: 180px;
`

export const TesteP = styled.p`
    color: red;
`