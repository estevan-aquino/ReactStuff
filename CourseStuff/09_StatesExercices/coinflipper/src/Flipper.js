import React, { Component } from 'react'
const PAGE_URL = "https://tinyurl.com/react-coin-"
class Flipper extends Component {
    render(){
        return(
        <img src={`${PAGE_URL}${this.props.face}`} style={{width: 10+ '%'}}></img>
        )
    }
}

export default Flipper