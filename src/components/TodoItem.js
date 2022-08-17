import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, checked }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleteAsync({ id, title, checked: !checked }));
    window.location.reload();
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
    window.location.reload();
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={checked}
        onClick={handleCheckboxClick}
      ></input>
      <li style={{ textDecoration: checked ? "line-through" : null }}>
        {title}
      </li>
      <button className="remove" onClick={handleDeleteClick}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
