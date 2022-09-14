import React, { Component } from 'react'
import './ButtonList.css'

class Botao extends Component {
    static defaultProps = {
        colors: ['Gray', 'pink', 'red', 'green', 'blue', 'purple'],
        number: ["1", "2", "3", "4", "5", "6"]
    }

    constructor(props) {
        super(props);
        this.state = { color: "" }
        this.changeBack = this.changeBack.bind(this);
        this.remove = this.remove.bind(this);
    }
    remove(num) {
        this.setState(st => ({
            number: st.number.filter(n => n !== num)
        }));
    }
    changeBack(cor) {
        let newColor = cor
        this.setState({ color: newColor })
    }
    handleClick() {
        this.changeBack();
        this.remove();
    }
    render() {
        return (
            <div className="Lista" style={{ backgroundColor: this.state.color }}>
                {this.props.number.map(c => {
                    return (
                        <div>
                            <button style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
                                onClick={this.remove}
                                onMouseLeave={this.changeBack}>
                                {c}
                            </button>
                        </div>
                    )




                })}
            </div>
        )
    }
}

export default Botao