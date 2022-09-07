import React, { Component } from 'react';
import "./Dice.css";

class Dice extends Component {
    render () {
        return <i className=
        {`Dice fa-solid fa-dice-${this.props.face} ${this.props.rolling && "Rolli"}`}></i>
    }
}

export default Dice