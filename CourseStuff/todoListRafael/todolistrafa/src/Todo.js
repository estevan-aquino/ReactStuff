import React, { useState } from 'react'
import EditTodo from './EditTodo'
import TodoForm from './TodoForm'
import './Todo.css'

function Todo({ task, id, completed, removeTodo, editTodo}) {
    const [isComp, setIsComp] = useState(completed)
    const [isEdit, setIsEdit] = useState(false)
    // let reWrite

    // if(isEdit){
    //     reWrite = <TodoForm />
    // } else {
    //     reWrite = 
    // }


    const edit = () => {
        setIsEdit(!isEdit);
    }
    const toggle = () => {
        setIsComp(!isComp)
    }
    return (
        <div>
            {isEdit ? <EditTodo editTodo={editTodo} id={id} task={task} edit={edit}/> : 
            <div>
                <li className="line" key={id} onClick={toggle} className={isComp ? "done" : "notDone"}>

                {task}

            </li>
            <button onClick={() => removeTodo(id)}>X</button>
            <button onClick={edit}>Edit</button>
            </div>
            }
            
            {/* <li 
            key={id} 
            onClick={toggle} 
            className={isComp? "done":"notDone"}
            >
            {task}

            </li> */}
            
        </div>
    )
}

export default Todo

// class Todo extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             //editar mostra se aparece o form ou o texto
//             editar: true,
//             valor: this.props.tsk
//         }

//         //binds
//         this.hRemove = this.hRemove.bind(this)
//         this.editSave = this.editSave.bind(this)
//         this.hChange = this.hChange.bind(this)
//         this.hSave = this.hSave.bind(this)
//         this.hDone = this.hDone.bind(this)
//     }
//     hRemove(){
//         // Aqui passo o prop do TodoList pro botão e passo o ID
//         this.props.remTodo(this.props.id)
//     }
//     editSave(){
//         this.setState({
//             // toda vez q isso executa ele alterna de true pra false
//             editar: !this.state.editar
//         })
//     }
//     hSave(event){
//         event.preventDefault();
//         this.props.updtTodo(this.props.id, this.state.valor)
//         this.setState({
//             editar: true
//         })
//     }
//     hChange(event) {
//         this.setState({
//             // Isso aqui pega oq se digita no input, eu acho...
//             [event.target.name]: event.target.value
//         })
//     }
//     hDone(){
//         this.props.changeDone(this.props.id)
//     }
//     render (){
//         let salvar
//             if (this.state.editar){
//                 salvar =
//                 <div className="line">
//                     <li className={this.props.doneTodo ? "done" : ""} onClick={this.hDone}>{this.props.tsk} </li>
//                     <button onClick={this.editSave}>Edit</button>
//                     <button onClick={this.hRemove}>Remove</button>
//                 </div>
//             } else {
//                 salvar =
//                 <div>
//                     <form onSubmit={this.hSave}>
//                         <input
//                             type="text"
//                             value={this.state.valor}
//                             name="valor"
//                             onChange={this.hChange}
//                         ></input>
//                         <button disabled={this.state.valor === ""}>Save</button>
//                     </form>
//                 </div>
//             }
//         return salvar;
//         }
//     }

