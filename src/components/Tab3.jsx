import React, { useState } from 'react';
import Header from './Header';

const Tab3 = () => {
  const [count, setCount] = useState('');
  const [output, setOutput] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const printMessages = (n) => {
    const messages = [];
    for (let i = 0; i < n; i++) {
      messages.push('Hello Task');
    }
    messages.push('STOP');
    setOutput(messages);
  };

  const handleAction = () => {
    const num = parseInt(count);
    if (!isNaN(num) && num >= 0) {
      printMessages(num);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAction(); 
    }
  };

  return (
    <>
    <div className="flex flex-col align-center justify-center items-center mt-10">
      <h2 className="text-xl font-bold mb-2">Enter a number to see recursive functionality</h2>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter a number"
        className="border p-2 mr-2 mt-2"
      />
      <button
        onClick={handleAction} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
      >
        Run Task
      </button>
      <div className="mt-4">
        {output.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
    </>
  );
};

export default Tab3;