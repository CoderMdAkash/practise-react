import { useState } from "preact/hooks";
import {useDispatch} from 'react-redux'
import { addTodo } from "../../features/todo.slice";

function AddTodo() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const todoSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }

    return ( 
        <>
        <form onSubmit={todoSubmitHandler}>
            <input type="text" placeholder="Write Todo" style={{border: '1px solid #ccc'}} onChange={(e) => setTodo(e.target.value)} value={todo} />
            &nbsp;
            &nbsp;
            <button type="submit" style={{border: '1px solid #ccc', background: '#ccc', borderRadius: '5px', padding: '3px'}}>Add Todo</button>
        </form>
        </>
     );
}

export default AddTodo;