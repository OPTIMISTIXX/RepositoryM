import React from 'react';
import './App.css';
import Header from './Komponents/Header';
import Sidebar from './Komponents/Sidebar';
import Profile from './Komponents/Profile';

const App = () =>{
  return (
    <div className = "wrapper">
    <Header/>
    <Sidebar/>
    <Profile/>
    </div>
);
}
export default App;