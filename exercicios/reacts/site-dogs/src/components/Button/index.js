import React from "react"

//Styles
import {Buttons} from "./styles"

export default function Button(props) {

  return (
    <Buttons onClick={props.action}>{props.label}</Buttons>
  )
}