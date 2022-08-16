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

  const toggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if (todo._id === id) {
        todo.title = todo.title;
        todo.checked = !todo.checked;
      }
      axios.post(`http://127.0.0.1:5000/` + id, ...todo);
    });
    return setTodos(newTodos);
  };
  /*setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return {
            title: todo.title,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );*/

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
