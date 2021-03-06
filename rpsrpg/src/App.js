import React, {Component } from 'react';
import './App.css';
let heroImg = 'https://www.stickpng.com/assets/thumbs/5a0587ef9cf05203c4b603d1.png'
let enemyImg = 'https://progameguides.com/wp-content/uploads/2019/04/fortnite-spider-knight-featured-png.png'
export default class App extends Component {


  state = {
    input:'',
    hero:{
      name:'',
      health:100,
      defense:5,
      attack:15},
    enemy: {
      name:'Evil',
      health:100,
      defense:15,
      attack:5},
    playerChoice:'',
    compChoice:'',
    board:{
      tie:0,
      won:0,
      lost:0
    },
    characters:[]
  }
componentDidMount(){
  // this.setState({
  //   person: new Person('Jon','Destoyer of all'),
  //   person1: new Person('Ilana','Thickest of em all')
  // })
  // console.log(this.state)
}
  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  submitName = e => {
    e.preventDefault();
    this.setState({
      hero: Object.assign({},
        this.state.hero,
      {name: this.state.input}
    )
  });

  }

  //rock=0, paper=1, scissors=2
  submitBattle = async e => {
    e.preventDefault();
    let { compChoice, playerChoice } = this.state;
    await this.setState({
        compChoice:Math.floor(Math.random()*3)
    })


    if (playerChoice === compChoice){
      console.log('tie')

      this.setState({
        board: Object.assign(
          this.state.board,
        {tie: this.state.board.tie + 1}
      )
    });

    }else if ((playerChoice - compChoice + 3) % 3 === 1){
      console.log('won')
      this.setState({
        board: Object.assign(
          this.state.board,
        {won: this.state.board.won + 1})
    })
    this.setState({
      enemy:Object.assign(this.state.enemy,{health:this.state.enemy.health - this.state.hero.attack})
    })
    }else{

      console.log('lost')
      this.setState({
        board: Object.assign(this.state.board,{lost: this.state.board.lost + 1})
      });
    }
    this.setState({
      hero:Object.assign(this.state.hero,{health:this.state.hero.health - this.state.enemy.attack})
    })



  }
  setChoice = e => {
    this.setState({
      [e.target.name]:+e.target.id
    })
  }
  actionDisplay = (choice) => {
    if(choice  === 0){
      return <h3>Rock</h3>
    }else if(choice  === 1){
      return <h3>Paper</h3>
    }else if(choice  === 2){
      return <h3>Scissors</h3>
    }else {
      return <h3>Waiting for move...</h3>
    }
  }
  //rock=0, paper=1, scissors=2
  render(){
    let { input,hero,enemy,board, playerChoice, compChoice } = this.state;
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
          {this.actionDisplay(playerChoice)}
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
        {this.actionDisplay(compChoice)}
        <h1>{enemy.name}</h1>
        <img src={enemyImg} alt='enemy'></img>
        <div>
          <button id="0"  name="compChoice" onClick={this.setChoice} >Rock</button>
          <button id='1'  name="compChoice"onClick={this.setChoice} >Paper</button>
          <button id='2' name="compChoice" onClick={this.setChoice} >Scissor</button>
        </div>
        </div>

      </div>
      </>
    )
  }

}

//0-300
//0 1 2
