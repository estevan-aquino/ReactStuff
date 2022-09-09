import React, { Component } from 'react'
import chose from './helpers.js'
import './Box.css'

class Box extends Component {
    static defaultProps = {
        colors:["purple", "black", "yellow", "red", "blue", "green", "pink", "brown"]
    }
    
    constructor(props){
        super(props);
        this.state = {
            color: chose(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let arr = [...this.props.colors]
        console.log(arr)
        this.setState(st =>{
            const nowColor = st.color;
            let index = arr.indexOf(nowColor)
            if (index > -1){
                arr.splice(index, 1)
            }
            console.log(arr)
            return st.color = chose(arr);
        })
    }
    render(){
        return(
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
                Teste
            </div>
        )
    }
}
export default Box