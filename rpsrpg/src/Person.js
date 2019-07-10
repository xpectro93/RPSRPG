import React ,  { Component } from 'react'

export default class Person extends Component {
  constructor(name,title){
    super()
    this.state = {
      name:name,
      attack:15,
      defense:5,
      title:title
    }

  }
  render(){
    return(
      <>Hello</>
    )
  }
}
