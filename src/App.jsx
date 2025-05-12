import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tab3 from './components/Tab3';
import Wikipedia from './components/Tab1';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ShowData from './components/Tab2'; 
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  const route = createBrowserRouter([
        {
          path: "/",
          element: <Header />, 
        },

  ]);

  return (
     <Provider store={store}> 
      <RouterProvider router={route} />
     </Provider>
  );
}

export default App;