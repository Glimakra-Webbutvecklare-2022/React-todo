import {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {

  const [todos, setTodos] = useState(['Plugga React', 'Sova', 'Träna']);

  const addTodo = (evt) => {
    evt.preventDefault();

    const newTodoFromUser = evt.target.elements.todo.value;
    
    const newTodos = [...todos, newTodoFromUser];

    setTodos(newTodos);
  }

  const removeTodo = (todoToRemove) => {

    const newTodos = todos.filter( todo => todo !== todoToRemove)

    setTodos(newTodos);
  }
 
  return (
    <main>
      <h1>My Todo App</h1>
      {/* TodoInput */}
      <TodoInput submitHandler={addTodo}/>

      {/* List */}
      <TodoList todos={todos} xClickHandler={removeTodo}/>
    </main>
  );
}

export default App;
