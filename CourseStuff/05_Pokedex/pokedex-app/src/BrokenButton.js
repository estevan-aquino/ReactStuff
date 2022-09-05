import React, { Component } from 'react'

class BrokenButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            num: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({num: rand})
    }

    render() {
        let cond;
        if (this.state.num === 7){
           cond =  <h1>You Win</h1>
        } else {
            cond =  <button onClick = {this.handleClick}
                 >
                    Click Me!
                </button>
        }
        return (
            <div>
                <p>The number is {this.state.num}</p>
                {cond}
            {/* <h1>Broken Click <b>{this.state.clicked ? 'Clicked!!' : 'Not Clicked'}</b></h1> */}
            </div>
        )
    }
}

export default BrokenButton;