import React, { useState } from 'react';

const Tab5 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="flex flex-col align-center justify-center items-center mt-10">
      <h2 className="text-xl font-bold mb-4"> Increment Buttons</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount1(count1 + 1)}
          className="bg-gray-500 text-white px-6 py-3 rounded-xl text-lg"
        >
          {count1}
        </button>

        <button
          onClick={() => setCount2(count2 + 1)}
          className="bg-gray-500 text-white px-6 py-3 rounded-xl text-lg"
        >
          {count2}
        </button>
      </div>
    </div>
  );
};

export default Tab5;
