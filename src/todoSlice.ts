import { createSlice } from "@reduxjs/toolkit";
import { State } from "./App";

const initialState: State = { todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        return {
          ...todo,
          completed: todo.id === action.payload ? true : todo.completed,
        };
      });
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
