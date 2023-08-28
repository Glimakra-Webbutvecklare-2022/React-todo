


function TodoInputComponent (props) {

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        console.log("Hallå jaa", evt.target.elements.todo.value);

        // extract new todo
        const newTodo = evt.target.elements.todo.value;

        // add todo to List of todos
        // create new todoList with all old todos + new todo from user
        const newTodoList = [...props.items, newTodo];

        // call setTodos to inform react about new state change
       props.setTodos(newTodoList); // updates todos
    }

    return (<form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="Add todo..." name="todo"/>
          <button type="submit">Add</button>
        </form>);
  }

export default TodoInputComponent;