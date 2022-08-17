import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch("http://127.0.0.1:5000/");
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const resp = await fetch("http://127.0.0.1:5000/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    const resp = await fetch(`http://127.0.0.1:5000/${payload.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
        checked: payload.checked,
      }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(`http://127.0.0.1:5000/${payload.id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        checked: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo._id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].checked = action.payload.checked;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.map((todo) => todo._id === action.payload.todo.id);
      state[index].title = action.payload.todo.title;
      state[index].checked = action.payload.todo.checked;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
