import React, { Component } from 'react'
import Dice from "./Dice"
import './RollDice.css'

class RollDice extends Component { 
    static defaultProps ={
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props){
        super(props);
        this.state={die1: 'one', die2: 'one', isRoll: false};
        this.roll = this.roll.bind(this);
    }

    roll(){
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)]
        
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)]
         
        this.setState({isRoll:true})

        setTimeout(()=>{
            this.setState({die1: newDie1, die2: newDie2});
        }, 500)
        
        setTimeout(()=>{
            this.setState({isRoll:false});
        }, 1000)
    }

    render(){
        return(
            <div className='RollDice'>
                <div className='RDcontainer'>
                    <Dice face={this.state.die1} rolling={this.state.isRoll}/>
                    <Dice face={this.state.die2} rolling={this.state.isRoll}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRoll}>
                    {this.state.isRoll ? 'Rolling...' : 'Roll Dice!!'}
                </button>
            </div>
        )
    }
}

export default RollDice