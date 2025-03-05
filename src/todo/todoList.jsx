import AddTodo from "./components/addTodo";
import ListTodo from "./components/listTodo";

function TodoList() {
    return (
        <>
        <div style={{padding: '10px'}}>
            <h1>Todo List</h1>
            <AddTodo/>
            <ListTodo/>
        </div>
        </>
    );
}

export default TodoList;