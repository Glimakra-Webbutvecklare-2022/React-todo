import { useState } from "react";
import ListComponent from "./components/ListComponent/ListComponent";
import TodoInputComponent from "./components/TodoInputComponent/TodoInputComponent";

import './App.css';

// 1. skapa header
// 2. lägg till en unordered list med 3 st listitems
// 3. skapa en komponent för listan
// 4. skapa en text-input med submitknapp

// let myItems = ['Gå ut med hunden', 'Plugga React', 'Meditera', 'Ring mamma', 'Planera morgondagen']

function App() {

  const [todos, setTodos] = useState(['Gå ut med hunden', 'Plugga React', 'Meditera', 'Ring mamma', 'Planera morgondagen']);

  return (
    <main>
      <h1 className='header'>Min Todo App</h1>

      <TodoInputComponent items={todos} setTodos={setTodos}/>

      <ListComponent items={todos} />
    </main>
  );
}

export default App;
