import React, {useState} from 'react'
import useReactInput from './useReactInput'


function TodoForm({addTodo}) {
    const [value, handleChange, reset ] = useReactInput("")
    return(
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}
            >
                <input
                    type="text"
                    placeholder='New Todo'
                    value={value}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}








// // function TodoForm() {
// //     const [tsk, hSubmit] = useState('')
// //     const hSub = (e) => {
// //         hSubmit(
// //             e.preventDefault()
// //             createTodo({...tsk, id: genID(), done: false})
// //         )
// //         // Previne o submit dar valor indevido
       

// //         // Aqui levo pro TodoList e jogo dentro de todoBlocks
       

// //         //deixa a barra vazia dnv assim q finaliza o processo
// //         this.setState({ tsk: "" })
// //     }
// //     return (
       
// //     )
// // }

// class TodoForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { tsk: "" };

//         // Binds
//         this.hChange = this.hChange.bind(this)
//         this.hSubmit = this.hSubmit.bind(this)
//     }
//     hChange(event) {
//         this.setState({
//             // Isso aqui pega oq se digita no input, eu acho...
//             [event.target.name]: event.target.value
//         })
//     }
//     hSubmit(event) {
//         // Previne o submit dar valor indevido
//         event.preventDefault();

//         // Aqui levo pro TodoList e jogo dentro de todoBlocks
//         this.props.createTodo({...this.state, id: genID(), done: false})

//         //deixa a barra vazia dnv assim q finaliza o processo
//         this.setState({ tsk: "" })
//     }
//     render() {
//         return (
//             <form onSubmit={this.hSubmit}>
//                 <label htmlFor='tsk'>Todo</label>
//                 <input
//                     type="text"
//                     placeholder='New Todo'
//                     id="tsk"
//                     name="tsk"
//                     value={this.state.tsk}
//                     onChange={this.hChange}
//                 />
//                 <button disabled={this.state.tsk === ""}>Add Todo</button>
//             </form>
//         )
//     }
// }

export default TodoForm