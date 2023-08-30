function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todoItem => (<li key={todoItem}>
        <span>{todoItem}</span>
        <button onClick={() => props.xClickHandler(todoItem)}>X</button></li>
      ))
      }
    </ul>
  );
}

export default TodoList;