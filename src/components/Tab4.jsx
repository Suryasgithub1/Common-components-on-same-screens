import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, setTodos } from '../utils/notepadslice';

const Tab4 = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'todos') {
        const updatedTodos = JSON.parse(e.newValue);
        dispatch(setTodos(updatedTodos));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [dispatch]);

  return (
    <div className="flex flex-col m-20  ">
      <h2 className="text-xl font-bold mb-4">Tab 4 - Todo List (Redux)</h2>
      <div className="flex mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 mr-2"
          placeholder="Enter a todo item"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item}</span>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:underline ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab4;
