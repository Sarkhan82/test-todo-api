import React, { useState } from "react";
import axios from "axios";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    checked: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const handleSubmit = async () => {
    if (todo.title.trim()) {
      // addTodo({ ...todo });
      await axios.put("http://127.0.0.1:5000/", todo);
      // reset tasks input
      //setTodo({ ...todo, title: "" });
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="addtask"
          name="task"
          type="text"
          placeholder="Entrez votre tâche"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button className="add" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
