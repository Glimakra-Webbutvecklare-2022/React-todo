function TodoInput(props) {
    return (
    <form onSubmit={props.submitHandler}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
    );
}

export default TodoInput;