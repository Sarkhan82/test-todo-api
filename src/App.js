import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>Ma Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
