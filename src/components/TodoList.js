import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div className="lists">
      <ul className="todos">
        {todos
          .filter((todo) => !todo.checked)
          .map((todo) => (
            <TodoItem id={todo._id} title={todo.title} checked={todo.checked} />
          ))}
      </ul>
      <ul className="done">
        {todos
          .filter((todo) => todo.checked)
          .map((todo) => (
            <TodoItem id={todo._id} title={todo.title} checked={todo.checked} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
