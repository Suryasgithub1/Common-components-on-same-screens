// src/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadInitialTodos = () => {
  try {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadInitialTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const updated = state.filter((_, i) => i !== action.payload);
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    },
    setTodos: (_, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, removeTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
