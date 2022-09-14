import React, { Component } from "react";
import { randomWord } from './words';
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6, img7]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    this.setState(st =>({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    }))
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));

  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    let ges = !this.guessedWord().includes("_")
    console.log(this.state.guessed)
    console.log(this.state.answer)
    console.log(ges)
    
    let  letters;
    let alter = `${this.state.nWrong}/${this.props.maxWrong}`

    if (this.props.maxWrong >= this.state.nWrong){
      letters = <p className='Hangman-btns'>{this.generateButtons()}</p>
    } else {
      letters = 
        <div>
          <p>You LOSE!</p>
          <p>The answer was "{this.state.answer}" better luck next time!</p>
          <button className="Reset" onClick={this.reset}>RESTART!</button>
        </div>
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={alter} />
        <p className="Hangman-wrong">You guessed wrong {this.state.nWrong} of {this.props.maxWrong} times!</p>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {!this.guessedWord().join("_") && <p>You WIN!</p>}
        {letters}
      </div>
    );
  }
}

export default Hangman;
