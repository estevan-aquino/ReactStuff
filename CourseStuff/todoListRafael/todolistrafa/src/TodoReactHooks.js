import React,{useState} from "react"
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import {genID} from './genID'


function TodoReactHooks(){
    const InitialTodos= [
        {id: genID(), task: "Go to the market", completed: false},
        {id: genID(), task: "Cook lunch", completed: true},
        {id: genID(), task: "Take Leroy for a Walk", completed: false}
    ]
    const [todos, setTodos] = useState(InitialTodos)
    const addTodo = newTodo => {    
        setTodos([...todos, {id:genID(), task:newTodo, completed: false}])
    };
    const removeTodo = todoId => {
        const updtTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updtTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updtTodos = todos.map(todo =>
            todo.id === todoId ? {...todo, task:newTask} : todo
        );
        setTodos(updtTodos);
    };

    return (
        <div>
            <TodoForm addTodo = {addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoReactHooks;