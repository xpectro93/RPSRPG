import React, {Component } from 'react';
import './App.css';
let heroImg = 'https://progameguides.com/wp-content/uploads/2019/04/fortnite-spider-knight-featured-png.png'
let enemyImg = 'https://ui-ex.com/images/knight-transparent-evil.png'
export default class App extends Component {
  state = {
    input:'',
    hero:{
      name:'',
      health:100,
      defense:5,
      attack:15
    },
    enemy: {
      name:'Evil',
      health:100,
      defense:15,
      attack:5
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  submitName = e => {
    e.preventDefault();
    this.setState({
      hero:{
        name:this.state.input
      }
    })
  }
  render(){
    let { input } = this.state;
    let { hero } = this.state;
    let { enemy } = this.state;
    console.log(input)
    return (
      <>
      <div id='top'>
      <input id='input' onChange={this.handleChange} ></input>
      <button onClick={this.submitName}>Set Name</button>
      </div>
      <div className="App">

        <div id='Hero'>
          <h3>{hero.health}</h3>
          <h1>{hero.name? hero.name:'Type your Name'}</h1>
          <img src={heroImg} alt='hero'></img>
        </div>

        <div id ='board'>
        <button type='submit'> Battle </button>
        </div>

        <div id ='enemy'>
        <h3>{enemy.health}</h3>
        <h1>EvilPerson</h1>
        <img src={enemyImg} alt='enemy'></img>
        </div>

      </div>
      </>
    );
  }

}
