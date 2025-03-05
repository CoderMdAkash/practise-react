import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo.slice";

function ListTodo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return ( 
        <>
            {todos.map((todo) => (
                <li key={todo.id} style={{marginBottom: '5px'}}>
                    {todo.id} - {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))} style={{background: '#f00', padding: '5px', borderRadius: '5px', marginLeft: '20px'}}>delete</button>
                </li>
            ))}
        </>
     );
}

export default ListTodo;