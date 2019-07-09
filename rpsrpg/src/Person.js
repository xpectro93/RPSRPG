import React ,  { Component } from 'react'

export default class Person extends Component {
  constructor(name){
    super()
    this.state = {
      name:name
    }
  }
  render(){
    return(
      <>Hello</>
    )
  }
}
