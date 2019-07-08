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
    },
    playerChoice:'',
    compChoice:'',
    board:{
      tie:0,
      won:0,
      lost:0
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
  compChoiceMaker = () => {
    this.setState({
      compChoice:Math.floor(Math.random()*3)
    })
  }
  submitBattle = e => {
    e.preventDefault();
    let { compChoice, playerChoice } = this.state;
    this.compChoiceMaker()
    if (playerChoice === compChoice){
      console.log('tie')
      this.setState({
        board:{
          tie:++this.state.board.tie
        }
      })
    }
    else if ((playerChoice - compChoice + 3) % 3 == 1){
      console.log('won')
      this.setState({
        board:{
          won:++this.state.board.won
        }
      })
    }else{
      console.log('lost')
      this.setState({
        board:{
          lost:++this.state.board.lost
        }
      })
    }
    this.setState({
      playerChoice:'',
      compChoice:''
    })


  }
  setChoice = e => {
    this.setState({
      [e.target.name]:e.target.id
    })
  }
  //rock=0, paper=1, scissors=2
  render(){
    let { input,hero,enemy,board } = this.state;
    console.log(this.state)
    return (
      <>
      <div id='top'>
      <input id='input' onChange={this.handleChange} ></input>
      <button onClick={this.submitName}>Set Name</button>
      </div>
      <div id="scoreboard">
      <h2>WON:{board.won}</h2>
      <h2>TIE:{board.tie}</h2>
      <h2>LOST:{board.lost}</h2>
      </div>
      <div className="App">

        <div id='Hero'>
          <h3>{hero.health}</h3>
          <h1>{hero.name? hero.name:'Type your Name'}</h1>
          <img src={heroImg} alt='hero'></img>
          <div>
          <div>
            <button id="0"  name="playerChoice" onClick={this.setChoice} >Rock</button>
            <button id='1'  name="playerChoice"onClick={this.setChoice} >Paper</button>
            <button id='2' name="playerChoice" onClick={this.setChoice} >Scissor</button>
          </div>
          </div>
        </div>

        <div id ='board'>
        <button onClick={this.submitBattle}> Battle </button>
        </div>

        <div id ='enemy'>
        <h3>{enemy.health}</h3>
        <h1>EvilPerson</h1>
        <img src={enemyImg} alt='enemy'></img>
        <div>
          <button id="0"  name="compChoice" onClick={this.setChoice} >Rock</button>
          <button id='1'  name="compChoice"onClick={this.setChoice} >Paper</button>
          <button id='2' name="compChoice" onClick={this.setChoice} >Scissor</button>
        </div>
        </div>

      </div>
      </>
    );
  }

}
