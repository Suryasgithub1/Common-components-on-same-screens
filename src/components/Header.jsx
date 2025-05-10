import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from "./Tab5"

const Header = () => {
    const [showComponent, setShowComponent] = useState(null); 

    const handleClick = ((e) => {
        const value = e.target.textContent;
        setShowComponent(value); 
    });

    const renderComponent = () => {
        switch (showComponent) {
            case 'Wikipedia':
                return <Tab1 />;
            case 'Show Data':
                return <Tab2 />;
            case 'Recursive Function':
                return <Tab3 />; 
            case 'Your Notepad':
                return <Tab4 />;
            case 'Count':
                return <Tab5 />;
            default:
                return null; 
        }
    };

    return (
        <div className='text-white '>
            <h1 className=' mt-10 flex text-3xl justify-center items-center text-gray-400'>Components</h1>
            <div className='inset-0 flex justify-between align-center items-center mt-6 mx-15 text-black bg-white rounded-xl '>
                <button onClick={handleClick} className='p-2 mx-10 hover:bg-gray-300 active:bg-gray-400 w-max-content rounded-xl '>Wikipedia</button>
                <button onClick={handleClick} className='p-2 hover:bg-gray-300 active:bg-gray-400 w-max-content rounded-xl'>Show Data</button>
                <button onClick={handleClick} className='p-2 hover:bg-gray-300 active:bg-gray-400 w-max-content rounded-xl'>Recursive Function</button>
                <button onClick={handleClick} className='p-2 hover:bg-gray-300 active:bg-gray-400 w-max-content rounded-xl'>Your Notepad</button>
                <button onClick={handleClick} className='p-2 mx-10 hover:bg-gray-300 active:bg-gray-400 w-max-content rounded-xl'>Count</button>
            </div>
            {showComponent && renderComponent()}
        </div>
    );
};

export default Header;