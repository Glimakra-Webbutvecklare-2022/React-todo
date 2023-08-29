function TodoList(props) {
    return (
        <ul>
        {props.todos.map(todoItem => <li>{todoItem}</li>)}
      </ul>
    );
}

export default TodoList;