import { Component } from "react";

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 99,
            gameOver: false
        };
    }

    render(){
        let isGameOver;
        if (this.state.gameOver){
            isGameOver = <h1>You Win!</h1>
        }else{
            <h1>You Lose!</h1>
            isGameOver = <h1>You Lose!</h1>
        }
        return (
            <div>
                {isGameOver}
                <h1>Your score Is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;