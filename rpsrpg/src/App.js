import React, {Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    input:'',
    hero:{
      name:'',
      health:100,
      defense:5,
      attack:15
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  render(){
    let {input} = this.state
    console.log(input)
    return (
      <div className="App">
        <input id='input' onChange={this.handleChange}></input>
        <div id='Hero'>Hero</div>
        <div id='board'>Board</div>
        <div id='enemy'>Enemy</div>
      </div>
    );
  }

}
