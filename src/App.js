import React from 'react';
import TodoList from "./TodoList";


function App() {
  return (
    <>
    <TodoList />
    <input type="text ">ToDo name</input>
    <button>Add Todo</button>
    <button>Clear ToDo's</button>
    </>
  );
}

export default App;
