import React from "react"
import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    height: 8vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    background: purple;

`;

const ListItem = styled.li`
    width: 100px;
    
    font-size: 25px;
    font-weight: 500;
    list-style: none;

    color: #fde7a9;

    &:hover {
        font-size: 28px;
        font-weight: 600;
        cursor: pointer;
        

    }
`

export default class Header extends React.Component {

    render(){
        return(
            <div>
                
                <List>
                    <ListItem>Incio</ListItem>
                    <ListItem>Sobre</ListItem>
                    <ListItem>Contato</ListItem>
                </List>
            </div>
        )
    }
}