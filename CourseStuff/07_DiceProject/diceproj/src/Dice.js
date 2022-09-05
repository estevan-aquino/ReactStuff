import React, { Component } from 'react';

class Dice extends Component {
    render () {
        return (
            <div>
                <i className={`fa-solid fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Dice