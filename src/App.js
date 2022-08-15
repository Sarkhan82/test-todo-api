import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";

const App = () => {
  // const LOCAL_STORAGE_KEY = "react-todo-list-todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /* const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    } */
    axios.get("http://127.0.0.1:5000/").then(({ data }) => {
      setTodos(data);
    });
  }, []);

  /*useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); */

  /* const addTodo = (todo) => {
    axios.post("http://127.0.0.1:5000/", ...todo);
  }; */

  const toggleComplete = async (id) => {
    await axios.put(`http://127.0.0.1:5000/`, ...todos);
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/` + id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  return (
    <div>
      <TodoForm /*addTodo={addTodo}*/ />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
