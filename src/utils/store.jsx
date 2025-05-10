// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './notepadslice';
import tab2Reducer from "./tab2slice"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    tab2: tab2Reducer,
  },
});

export default store;