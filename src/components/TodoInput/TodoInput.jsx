function TodoInput(props) {
    return (<form onSubmit={props.onSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>)
}

export default TodoInput;