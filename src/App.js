import {useState} from "react";
import './App.css';

function App() {
  // stateful array to keep track on todos
  const [todos, setTodos] = useState([{text: 'Plugga react 1 timme', isEditable: false}]);
  // let todos = ['plugga react 1 timme'];

  // function to addTodo
  const addTodo = (evt) => {
    evt.preventDefault(); // stop form from redirecting
    // todos.push(todoToAdd);

    const todoToAdd = { text: evt.target.elements.todo.value, isEditable: false}; // extract text input
    evt.target.elements.todo.value = ""; // reset text input

    const newTodos = [...todos, todoToAdd]; // create new array as todos

    setTodos(newTodos); // set new todos and rerender UI
  }

  // function to removeTodo
  const removeTodo = (todoToRemove) => {
    const filteredTodos = todos.filter(item => item.text !== todoToRemove.text); // keep all todos except todoToRemove

    setTodos(filteredTodos);
  }

  const editTodo = (todoToEdit) => {
    console.log("I should edit ", todoToEdit);

    const filteredTodos = todos.filter(item => item.text !== todoToEdit.text); // keep all todos except todoToRemove

    const newTodos = [...filteredTodos, {text: todoToEdit.text, isEditable: !todoToEdit.isEditable}]

    setTodos(newTodos);
  }

  return (
    <main>
      <h1>My todo app</h1>
      {/* TodoInput */}
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>

      {/* TodoList */}
      <ul>
        {/* map todos into li */}
        {todos.map(item => (<li key={item}> <span contentEditable={item.isEditable}>{item.text}</span> <button onClick={() => removeTodo(item)}>X</button> 
                                                 <button onClick={() => editTodo(item)}>E</button>  </li>))}
      </ul>
    </main>
  );
}

export default App;
