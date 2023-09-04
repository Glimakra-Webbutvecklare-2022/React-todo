import {useState} from "react";
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // stateful array to keep track on todos
  const [todos, setTodos] = useState([{text: 'Plugga react 1 timme', isEditable: false, isDone: false}]);
  // let todos = ['plugga react 1 timme'];

  // function to addTodo
  const addTodo = (evt) => {
    evt.preventDefault(); // stop form from redirecting
    // todos.push(todoToAdd);

    const todoToAdd = { text: evt.target.elements.todo.value, isEditable: false, isDone: false}; // extract text input
    evt.target.elements.todo.value = ""; // reset text input

    const newTodos = [...todos, todoToAdd]; // create new array as todos

    setTodos(newTodos); // set new todos and rerender UI
  }

  // function to removeTodo
  const removeTodo = (todoToRemove) => {
    const filteredTodos = todos.filter(item => item.text !== todoToRemove.text); // keep all todos except todoToRemove

    setTodos(filteredTodos);
  }

  const finishTodo = (todoToFinish) => {
    const updatedTodo = {...todoToFinish, isDone: true};

    const filteredTodos = todos.filter(item => item.text !== todoToFinish.text);

    setTodos([...filteredTodos, updatedTodo]);

  }

  const editTodo = (todoToEdit, newText) => {

    const oldText = todoToEdit.text;
    const filteredTodos = todos.filter(item => item.text !== oldText); // keep all todos except todoToRemove



    // when we start edit we want the old text
    // if (todoToEdit.isEditable === false) {
    //   const newTodos = [...filteredTodos, {text: oldText, isEditable: true}]
    //   setTodos(newTodos);
    // // when we save we want to new text
    // } else { 
    //   const newTodos = [...filteredTodos, {text: newText, isEditable: false}]
    //   setTodos(newTodos);
    // }

    const newTodos = [...filteredTodos, { text: todoToEdit.isEditable ? newText : oldText, isEditable: !todoToEdit.isEditable}]
    setTodos(newTodos);
  }

  const todosLeft = todos.filter(item => !item.isDone);
  const todosDone = todos.filter(item => item.isDone);

  return (
    <main>
      <h1>My todo app</h1>
      <TodoInput onSubmit={addTodo}/>

      {/* TodoList */}
      <TodoList todos={todosLeft} removeTodo={removeTodo} editTodo={editTodo} finishTodo={finishTodo}/>


      <h2>Done</h2>
      <ul>
      {todosDone.map(item => <li>{item.text}</li>)}
      </ul>
    </main>
  );
}

export default App;
