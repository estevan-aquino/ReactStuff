import React, { Component } from 'react'
import {genID} from './genID'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { tsk: "" };

        // Binds
        this.hChange = this.hChange.bind(this)
        this.hSubmit = this.hSubmit.bind(this)
    }
    hChange(event) {
        this.setState({
            // Isso aqui pega oq se digita no input, eu acho...
            [event.target.name]: event.target.value
        })
    }
    hSubmit(event) {
        // Previne o submit dar valor indevido
        event.preventDefault();

        // Aqui levo pro TodoList e jogo dentro de todoBlocks
        this.props.createTodo({...this.state, id: genID(), done: false})

        //deixa a barra vazia dnv assim q finaliza o processo
        this.setState({ tsk: "" })
    }
    render() {
        return (
            <form onSubmit={this.hSubmit}>
                <label htmlFor='tsk'>Todo</label>
                <input
                    type="text"
                    placeholder='New Todo'
                    id="tsk"
                    name="tsk"
                    value={this.state.tsk}
                    onChange={this.hChange}
                />
                <button disabled={this.state.tsk === ""}>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm