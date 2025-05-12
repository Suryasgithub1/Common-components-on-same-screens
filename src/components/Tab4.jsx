import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../utils/notepadslice';

const Tab4 = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const add = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  const remove = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="flex flex-col m-20">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          className="border p-2 flex-1 mr-2"
          placeholder="New todo"
        />
        <button onClick={add} className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{todo}</span>
            <button onClick={() => remove(index)} className="text-red-500 hover:underline ml-4">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab4;