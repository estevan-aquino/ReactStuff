import React, { Component } from 'react'
import "./TodoList.css"
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
    static defaultProps ={
        title: "My Todo List"
    }

    constructor(props){
        super(props);
        this.state = {todoBlocks:[]}
        
        // Binds
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.updt = this.updt.bind(this)
        this.isDone = this.isDone.bind(this)
    }

    // Pega o submit do Form e joga dentro de todoBlocks
    create(newTodo){
        if (newTodo !== ""){
            this.setState(st =>({
                todoBlocks: [...this.state.todoBlocks, newTodo]
            }))
        }
    }
    remove(id){
        this.setState({
            // revisa todos blocks e compara com o ID que foi passado pra remover, 
            todoBlocks: this.state.todoBlocks.filter(todo => todo.id !== id)
        })
    }
    updt(id, saved){
        // preservar o original
        const originTodos = this.state.todoBlocks.map(block =>{
            if( block.id === id){
                // pega o original e só passo o valor de tsk
                return {...block, tsk: saved}
            }
            // ahhh
            return block;
        })
        // ahhhhhhh
        this.setState({ todoBlocks: originTodos})
        
        // q decepção
        // this.state.todoBlocks.map(iden =>{
        //     if (id === iden.id){
        //         this.setState({

        //         })
        //     }
        // })
    }
    isDone (id){
        const originTodos = this.state.todoBlocks.map(block =>{
            if( block.id === id){
                // pega o original e só passo o valor de tsk
                return {...block, done: !block.done}
            }
            // ahhh
            return block;
        })
        // ahhhhhhh
        this.setState({ todoBlocks: originTodos})
    }
    render(){
        const blocks = this.state.todoBlocks.map(block => {
                    // Foi preciso criar um ID pq não sei pq karambolas a key ñ quer passar para child
                    // ver depois pq a Key não passa pro Todo
            return <Todo key={block.id} id={block.id} tsk={block.tsk} doneTodo={block.done} remTodo={this.remove} updtTodo={this.updt} changeDone={this.isDone} />
        })
        return(
            <div className='Wrapper'>
                <div className='Container'>
                    <h1>{this.props.title}</h1>
                    {/* <TodoForm createTodo={this.create} /> */}
                    {blocks}
                    <TodoForm createTodo={this.create} />
                </div>
            </div>
        )
    }
}

export default TodoList