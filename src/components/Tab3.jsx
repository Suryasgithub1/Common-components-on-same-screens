import React, { useState } from 'react';

const Tab3 = () => {
  const [count, setCount] = useState('');
  const [output, setOutput] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const printMessages = (n, messages = []) => {
    if (n <= 0) {
      messages.push('STOP');
      setOutput(messages);
      return;
    }
    messages.push('Hello Task');
    printMessages(n - 1, messages);
  };

  const handleClick = () => {
    const num = parseInt(count);
    if (!isNaN(num) && num >= 0) {
      printMessages(num);
    }
  };

  return (
    <div className="flex flex-col align-center justify-center items-center mt-10">
      <h2 className="text-xl font-bold mb-2">Enter a number to see recursive functiobality</h2>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        placeholder="Enter a number"
        className="border p-2 mr-2 mt-2"
      />
      <button
        onClick={handleClick}
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
  );
};

export default Tab3;
