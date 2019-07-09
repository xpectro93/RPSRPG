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
      hero: Object.assign({},
        this.state.hero,
      {name: this.state.input}
    )
  });

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
        board: Object.assign({},
          this.state.board,
        {tie: this.state.board.tie + 1}
      )
    });

    }
    else if ((playerChoice - compChoice + 3) % 3 === 1){
      console.log('won')
      this.setState({
        board: Object.assign({},
          this.state.board,
        {won: this.state.board.won + 1}
      )
    });

    }else{
      console.log('lost')
      this.setState({
        board: Object.assign({},
          this.state.board,
        {lost: this.state.board.lost + 1}
      )
      });
    }



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
      
      </>
    );
  }

}
