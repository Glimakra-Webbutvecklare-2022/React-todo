import {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {

  const [todos, setTodos] = useState(['Plugga React']);

  const addTodo = (evt) => {
    evt.preventDefault();

    const newTodo = evt.target.elements.todo.value;

    setTodos([...todos, newTodo]);
  }

  return (
    <main>
      <h1>My Todo App</h1>
      {/* TodoInput */}
      <TodoInput submitHandler={addTodo}/>

      {/* List */}
      <TodoList todos={todos}/>
    </main>
  );
}

export default App;
