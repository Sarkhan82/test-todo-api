import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value) {
      dispatch(
        addTodoAsync({
          title: value,
        })
      );
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          className="addtask"
          placeholder="Ajouter une tache ..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>

        <button type="submit" className="add">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
