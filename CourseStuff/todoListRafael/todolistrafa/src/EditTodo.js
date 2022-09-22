import { type } from '@testing-library/user-event/dist/type'
import React, {useState} from 'react'

function EditTodo({edit, id, task, editTodo}){

    const [value, hText] = useState(task)
    const handler = event => {
        hText(event.target.value)
    }
    // const reset = () => {
    //    {edit}
    // }
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                editTodo(id, value)
                {edit()}
            }}>
                <input type='text' value={value} onChange={handler} />
                <button type="submit">salvar</button>
            </form>
        </div>
    )
}

export default EditTodo