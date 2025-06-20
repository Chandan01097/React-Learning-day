import React from 'react';
import UserContextProvider from './context/UserContextProvider'; // Corrected path and casing
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>I am Don</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;