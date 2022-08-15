import React from "react";

const TodoActions = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo._id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo._id);
  };
  return (
    <div className="task">
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.checked ? "line-through" : null }}>
        {todo.title}
      </li>
      <button className="remove" onClick={handleRemoveClick}>
        ❌
      </button>
    </div>
  );
};

export default TodoActions;
