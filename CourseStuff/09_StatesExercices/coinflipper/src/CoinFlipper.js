import React, { Component } from 'react'
import Flipper from './Flipper'

class CoinFlipper extends Component {
    static defaultProps = {
            type:"Coin",
            lados: ["tails-jpg", "heads-jpg"]
    };

    constructor(props){
        super(props);
        this.state = {faces: "", hCounter:0, tCounter:0, flips:0}
        this.flip = this.flip.bind(this);
    }

    flip(){
        let randNum= this.props.lados[Math.floor(Math.random()* this.props.lados.length)]
        
        this.setState(st =>{
            if (randNum === "tails-jpg"){
                st.hCounter += 1;
            }else{
                st.tCounter += 1;
            }
            return {
               faces: st.faces = randNum,
               flips: st.flips =+ 1
            }
        })
        // this.setState({faces: randNum})
        // if (randNum === "heads-jpg"){
        //     let contador = this.state.hCounter + 1;
        //     let viradas = this.state.flips + 1;
        //     this.setState({hCounter: contador, flips: viradas})
        // } else {
        //     let contador = this.state.tCounter + 1;
        //     let viradas = this.state.flips + 1;
        //     this.setState({tCounter: contador, flips: viradas})
        // }
    }
    
    render(){
        return(
            <div>
            <h2 className='Title'>{this.props.type}</h2>
            <div><Flipper face={this.state.faces}/></div>
            <p>out of {this.state.flips} flips, there have been {this.state.hCounter} heads and {this.state.tCounter} tails</p>
            <button onClick={this.flip}>Click to Flip!</button>
            </div>
        )
    }
}

export default CoinFlipper