import "./TodoList.css";

function TodoList(props) {
    return (
        <ul>
            {/* map todos into li */}
            {props.todos.map(item => (<li key={item}> 
                                        <span className={item.isEditable ? "editable" : ""} contentEditable={item.isEditable}>{item.text}</span> 
                                        <button onClick={() => props.removeTodo(item)}>X</button>
                                        <button onClick={() => props.editTodo(item)}>{item.isEditable ? "S" : "E"}</button> 
                                        <button onClick={() => props.finishTodo(item)}>D</button> 
                                    </li>))}
        </ul>
    );
}

export default TodoList;