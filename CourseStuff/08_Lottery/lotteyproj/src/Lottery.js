import React, { Component } from 'react'
import Ball from './LotBall';
import './LotBall.css'
import App from './App';

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {nums: Array.from({length:this.props.maxBalls})};
        // this.generate = this.generate.bind(props);
        this.gen = this.gen.bind(props);
    }
    // generate(){
        
    // }
    gen(){
        this.setState(st => ({
            nums: st.nums.map(
                n=> Math.floor(Math.random()*this.maxNum) + 1
            )
        }));
    }
    render (){
        let simb;
        return(
            <section className="lotCont">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.gen}>Generate Numbers</button>
            </section>
        )
    }
}

export default Lottery